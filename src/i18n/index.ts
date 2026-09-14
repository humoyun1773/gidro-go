import { uz } from './uz';
import { ru } from './ru';
import { en } from './en';
import type { Language, Translations } from './types';

export * from './types';

export const translations: Record<Language, Translations> = {
  uz,
  ru,
  en,
};
