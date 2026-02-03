# Polylang React Library

A unified package of React components, icons, and utilities for Polylang projects, optimized for WordPress Gutenberg integration.

## 📦 What's Included

- **React Components** - UI components like `LanguageDropdown` and `LanguageFlag`
- **SVG Icons** - Complete icon library for Polylang Pro
- **API Middlewares** - WordPress REST API filtering utilities

> **Note**: This package distributes **source code** that is processed by consuming projects. No build step is needed.

## 🚀 Installation

### From GitHub

> The package is not yet published to npm.

```bash
npm install github:polylang/polylang-react-library
```

## 💻 Usage

### Components

```javascript
import { LanguageDropdown, LanguageFlag } from '@wpsyntex/polylang-react-library';

function MyComponent() {
	const languages = new Map( [
		[ 'en', { slug: 'en', name: 'English', flag_url: '...' } ],
		[ 'fr', { slug: 'fr', name: 'Français', flag_url: '...' } ],
	] );

	return (
		<LanguageDropdown
			handleChange={ ( slug ) => console.log( slug ) }
			languages={ languages }
			selectedLanguage={ languages.get( 'en' ) }
		/>
	);
}
```

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
	DefaultLangIcon,
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

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Linting

```bash
npm run lint          # Check code
npm run lint:fix      # Fix automatically
npm run format        # Format code
```

## 📋 Available Exports

### Components
- `LanguageDropdown` - Dropdown selector for languages
- `LanguageFlag` - Flag display component

### Icons
- `duplication` - Copy/duplicate icon
- `pencil` - Edit icon
- `plus` - Add/create icon
- `synchronization` - Sync icon
- `translation` - Translation icon
- `trash` - Delete icon
- `star` - Favorite/default icon
- `SubmenuIcon` - Submenu navigation icon
- `DefaultLangIcon` - Default language indicator

### Middlewares
- `editorsRequestsFilter` - Filter WordPress editor requests
- `filterPathMiddleware` - Filter requests by path matching

## 📄 Requirements

- Node.js >= 20.0.0
- npm >= 10.0.0

### Peer Dependencies

This package requires the following peer dependencies (provided by consuming projects):

- `@wordpress/api-fetch` >= 7.0.0
- `@wordpress/components` >= 27.0.0
- `@wordpress/element` >= 6.0.0
- `@wordpress/i18n` >= 5.0.0
- `@wordpress/primitives` >= 4.0.0
- `lodash` >= 4.17.0
- `react` >= 17.0.0

## 📄 License

GPL-3.0+

- [Polylang](https://polylang.pro/)
