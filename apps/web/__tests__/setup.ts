import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

if (typeof Element !== 'undefined') {
  Element.prototype.scrollIntoView = () => {};
}

// Mock react-i18next for all tests
vi.mock('react-i18next', () => ({
  useTranslation: (ns?: string) => ({
    t: (key: string) => (ns ? `${ns}:${key}` : key),
    i18n: {
      language: 'en',
      changeLanguage: vi.fn().mockResolvedValue(undefined),
    },
  }),
  Trans: ({ children }: { children: React.ReactNode }) => children,
  initReactI18next: { type: '3rdParty', init: vi.fn() },
}));

export {};
