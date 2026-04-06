import i18n from 'i18next';
import { getRegionFromIP } from './getRegionFromIP';

export async function setDefaultLanguageByRegion() {
  // Only set if not already set by cookie or localStorage
  const cachedLang = i18n.language || localStorage.getItem('i18nextLng') || '';
  if (cachedLang && ['en', 'zh', 'zh-CN'].includes(cachedLang)) return;

  const region = await getRegionFromIP();
  if (region === 'CN') {
    i18n.changeLanguage('zh-CN');
  } else if (region === 'HK' || region === 'TW') {
    i18n.changeLanguage('zh');
  } else {
    i18n.changeLanguage('en');
  }
}
