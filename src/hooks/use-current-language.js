/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { store as coreEditorStore } from '@wordpress/editor';

/**
 * Custom hook to get the current language from the editor.
 *
 * @param {Array} languages The languages list.
 * @return {Object|null} The current language, `null` if not found.
 */
export const useCurrentLanguage = ( languages ) => {
	const currentPost = useSelect( ( select ) =>
		select( coreEditorStore ).getCurrentPost()
	);

	if ( ! languages || ! currentPost ) {
		return null;
	}

	const currentLanguageSlug = currentPost.lang ?? pllEditorCurrentLanguageSlug;

	const currentLanguage = languages.find( ( language ) => {
		return language.slug === currentLanguageSlug;
	} );

	return currentLanguage ? currentLanguage : null;
};
