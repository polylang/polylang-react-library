# Polylang React Library

A unified package of icons, hooks, and utilities for Polylang projects, optimized for WordPress Gutenberg integration.

## 📦 What's Included

- **SVG Icons** - Complete icon library for Polylang projects
- **React Hooks** - Custom hooks for language management and state handling
- **API Middlewares** - WordPress REST API filtering utilities

## 🚀 Installation

### From GitHub

> The package is not yet published to npm.

```bash
npm install github:polylang/polylang-react-library
```

The package automatically builds during installation via the `prepare` script. The source code in `src/` is transpiled to `build/` using Babel with WordPress presets.

## 💻 Usage

### Icons

```javascript
import {
	duplication,
	pencil,
	plus,
	synchronization,
	translation,
	trash,
	star,
	SubmenuIcon,
} from '@wpsyntex/polylang-react-library';

function MyToolbar() {
	return (
		<div>
			<button>{ duplication } Duplicate</button>
			<button>{ pencil } Edit</button>
			<button>{ trash } Delete</button>
		</div>
	);
}
```

### Middlewares

```javascript
import { editorsRequestsFilter, filterPathMiddleware } from '@wpsyntex/polylang-react-library';

// Apply language filtering to editor requests
editorsRequestsFilter( ( options ) => {
	return {
		...options,
		data: {
			...options.data,
			lang: 'en',
		},
	};
} );
```

### Hooks

```javascript
import {
	useCuratedLanguages,
	useCurrentLanguage,
	useLanguagesList,
} from '@wpsyntex/polylang-react-library';

function LanguageSelector() {
	// Fetch all available languages
	const languages = useLanguagesList();
	
	// Get the current language from the editor
	const currentLanguage = useCurrentLanguage( languages );
	
	// Curate languages with current language first
	const curatedLanguages = useCuratedLanguages(
		languages,
		currentLanguage,
		false
	);
	
	return <div>{ currentLanguage?.name }</div>;
}
```

## 🛠️ Development

### Setup

```bash
npm install
npm run build         # Build src/ to build/
```

### Linting

```bash
npm run lint          # Check code
npm run lint:fix      # Fix automatically
```

## 📋 Available Exports

- `duplication` - Copy/duplicate icon
- `pencil` - Edit icon
- `plus` - Add/create icon
- `synchronization` - Sync icon
- `translation` - Translation icon
- `trash` - Delete icon
- `star` - Favorite/default icon
- `SubmenuIcon` - Submenu navigation icon

### Middlewares
- `editorsRequestsFilter` - Filter WordPress editor requests
- `filterPathMiddleware` - Filter requests by path matching

### Hooks
- `useCuratedLanguages` - Curate languages list with current language first
- `useCurrentLanguage` - Get the current language from the editor
- `useLanguagesList` - Fetch the list of available languages

## 📄 Requirements

- Node.js >= 20.0.0
- npm >= 10.0.0

### Peer Dependencies

This package requires the following peer dependencies (provided by consuming projects):

- `@wordpress/api-fetch` >= 7.0.0
- `@wordpress/data` >= 10.0.0
- `@wordpress/editor` >= 14.0.0
- `@wordpress/element` >= 6.0.0
- `@wordpress/primitives` >= 4.0.0
- `lodash` >= 4.17.0
- `react` >= 17.0.0

## 📄 License

GPL-3.0+
