/** Singleton access to shared router component.
 * Set in app.js when routes are configured.
 * Used by loginActions.js, among others. **/
var _router = null;
export default {
    set: (router) => _router = router,
    get: () => _router
}