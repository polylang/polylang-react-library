/**
 * Polylang React Library
 *
 * A collection of React components, icons, and utilities for Polylang projects.
 */

// Export components
export { LanguageDropdown } from './components/language-dropdown';
export { default as LanguageFlag } from './components/language-flag';

// Export icons
export { default as duplication } from './icons/duplication';
export { default as pencil } from './icons/pencil';
export { default as plus } from './icons/plus';
export { default as synchronization } from './icons/synchronization';
export { default as translation } from './icons/translation';
export { default as trash } from './icons/trash';
export { default as star } from './icons/star';
export { default as SubmenuIcon } from './icons/submenu';
export { default as DefaultLangIcon } from './icons/default-lang';

// Export middlewares
export { default as filterPathMiddleware } from './middlewares/filter-path';
export { default as editorsRequestsFilter } from './middlewares/editors-requests-filter';

// Export hooks
export { useCuratedLanguages } from './hooks/use-curated-languages';
export { useCurrentLanguage } from './hooks/use-current-language';
export { useLanguagesList } from './hooks/use-languages-list';
export { useMemoizedSwitcherLabel } from './hooks/use-memoized-switcher-label';
