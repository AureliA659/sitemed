import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that a locale is provided and is in the list of supported locales
  let locale = await requestLocale;
  if (!locale || !['en', 'fr'].includes(locale)) {
    locale = 'en';
  }

  // Load the messages for the given locale
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
