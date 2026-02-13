'use client';

import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === 'ka' ? 'en' : 'ka';
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer text-base font-semibold text-primary uppercase"
    >
      {locale === 'ka' ? 'ქარ' : 'ENG'}
    </button>
  );
}
