import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Medical Excellence Center - Expert Healthcare & Treatment',
  description: 'Premier medical center with four specialized physicians offering cutting-edge treatments, personalized care, and scientific expertise for your health and wellbeing.',
  keywords: 'medical center, physicians, healthcare, medical treatment, specialist doctors',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} ${montserrat.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
