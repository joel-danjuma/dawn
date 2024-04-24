/**
 * An Array of routes that are accesible to the public
 * @type {string[]}
 */
export const publicRoutes = ["/", "/about"];

/**
 * An Array of routes that are used for authentication
 * @type {string[]}
 */
export const authRoutes = ["/login", "/signup"];

/**
 * The prefix for authentication routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default Login Routes
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard/explore";
