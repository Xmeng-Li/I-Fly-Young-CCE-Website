import i18n from 'i18next';
import { getRegionFromIP } from './getRegionFromIP';

function getLanguageByRegion(region?: string | null) {
  if (region === 'CN') return 'zh-CN';
  if (region && ['HK', 'TW', 'MO'].includes(region)) return 'zh';
  return 'en';
}

function trackLanguageToAnalytics(language: string, region?: string | null) {
  if (typeof window === 'undefined') return;

  const gtag = (window as Window & typeof globalThis & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;

  gtag('event', 'language_detected', {
    language_version: language,
    language,
    region: region || 'unknown'
  });
}

export async function setDefaultLanguageByRegion() {
  const cachedLang = i18n.language || localStorage.getItem('i18nextLng') || '';
  if (cachedLang && ['en', 'zh', 'zh-CN'].includes(cachedLang)) {
    trackLanguageToAnalytics(cachedLang);
    return;
  }

  const region = await getRegionFromIP();
  const selectedLanguage = getLanguageByRegion(region);
  (window as typeof window & { __userRegion?: string }).__userRegion = region || 'unknown';
  await i18n.changeLanguage(selectedLanguage);
  trackLanguageToAnalytics(selectedLanguage, region);
}
