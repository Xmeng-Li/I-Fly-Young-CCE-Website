// Utility to get region from IP using a public geolocation API
export async function getRegionFromIP(): Promise<'CN' | 'HK' | 'TW' | 'OTHER'> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) return 'OTHER';
    const data = await res.json();
    if (data.country_code === 'CN') return 'CN';
    if (data.country_code === 'HK') return 'HK';
    if (data.country_code === 'TW') return 'TW';
    return 'OTHER';
  } catch {
    return 'OTHER';
  }
}
