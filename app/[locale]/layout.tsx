import { Navbar } from '@/components/navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Locale } from '@/i18n-config';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
