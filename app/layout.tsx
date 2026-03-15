import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Navbar } from '@/components/navbar';

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
  openGraph: {
    title: 'Medical Excellence Center',
    description: 'Expert healthcare with four specialized physicians',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Excellence Center',
    description: 'Expert healthcare with four specialized physicians',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
