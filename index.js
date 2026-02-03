/**
 * Polylang React Library
 *
 * A collection of React components, icons, and utilities for Polylang projects.
 */

// Export components
export { LanguageDropdown } from './src/components/language-dropdown';
export { default as LanguageFlag } from './src/components/language-flag';

// Export icons
export { default as duplication } from './src/icons/duplication';
export { default as pencil } from './src/icons/pencil';
export { default as plus } from './src/icons/plus';
export { default as synchronization } from './src/icons/synchronization';
export { default as translation } from './src/icons/translation';
export { default as trash } from './src/icons/trash';
export { default as star } from './src/icons/star';
export { default as SubmenuIcon } from './src/icons/submenu';
export { default as DefaultLangIcon } from './src/icons/default-lang';

// Export middlewares
export { default as filterPathMiddleware } from './src/middlewares/filter-path';
export { default as editorsRequestsFilter } from './src/middlewares/editors-requests-filter';

// Export hooks
export { useCuratedLanguages } from './src/hooks/use-curated-languages';
export { useCurrentLanguage } from './src/hooks/use-current-language';
export { useLanguagesList } from './src/hooks/use-languages-list';
export { useMemoizedSwitcherLabel } from './src/hooks/use-memoized-switcher-label';
