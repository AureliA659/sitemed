import { Locale } from '@/i18n-config';
import { enMessages, frMessages } from './messages';

type Messages = typeof enMessages;

const allMessages: Record<Locale, Messages> = {
  en: enMessages,
  fr: frMessages,
};

export function getMessages(locale: Locale): Messages {
  return allMessages[locale] || enMessages;
}
