/**
 * Filters requests for translatable entities.
 * This logic is shared across all Polylang plugins.
 *
 * @since 3.5
 *
 * @param {Object}   options        - API fetch options object.
 * @param {Array}    filteredRoutes - Array of route paths to filter.
 * @param {Function} filter         - Function to filter matching routes.
 * @return {Object} Modified REST request options.
 */
const filterPathMiddleware = ( options, filteredRoutes, filter ) => {
	const cleanPath = options.path
		.split( '?' )[ 0 ]
		.replace( /^\/+|\/+$/g, '' ); // Get path without query parameters and trim '/'.

	return Object.values( filteredRoutes ).find(
		( path ) => cleanPath === path
	)
		? filter( options )
		: options;
};

export default filterPathMiddleware;
