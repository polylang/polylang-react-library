const wpPlugin = require( '@wordpress/eslint-plugin' );

module.exports = [
	{
		ignores: [ '**/node_modules/**', '**/build/**' ],
	},
	...wpPlugin.configs.recommended,
	{
		settings: {
			'import/core-modules': [
				'@wordpress/api-fetch',
				'@wordpress/data',
				'@wordpress/editor',
				'@wordpress/element',
				'@wordpress/primitives',
				'lodash',
				'react',
			],
		},
		languageOptions: {
			globals: {
				wp: 'readonly',
				pllEditorCurrentLanguageSlug: 'readonly',
			},
		},
	},
];
