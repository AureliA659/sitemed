'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

function FlagFR({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="213.3" height="480" fill="#002395" />
      <rect x="213.3" width="213.4" height="480" fill="#fff" />
      <rect x="426.7" width="213.3" height="480" fill="#ed2939" />
    </svg>
  );
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z" />
      <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z" />
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === 'fr' ? 'en' : 'fr';

  const handleSwitch = () => {
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '');
    router.push(`/${otherLocale}${pathWithoutLocale}`);
  };

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 active:scale-95 transition-all overflow-hidden border border-gray-200 shadow-sm"
      aria-label={`Switch to ${otherLocale === 'fr' ? 'French' : 'English'}`}
      title={otherLocale === 'fr' ? 'Français' : 'English'}
    >
      {otherLocale === 'fr' ? (
        <FlagFR className="w-6 h-4 rounded-[2px]" />
      ) : (
        <FlagGB className="w-6 h-4 rounded-[2px]" />
      )}
    </button>
  );
}
