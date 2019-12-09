// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  application: {
    name: 'nwk-planning'
  },
  config: {

    AIRTABLE_API_KEY: 'key5WJB3zRIAyyfTr',

    LOGIN_URL: 'login',

    IS_LOGGEDIN_URL: 'in',

    api: false,
    url: './assets/params/json/',

    // HMR (Hot Module Replacement)
    // Allow to refresh ts, css, html without reload the application
    hmr: false,

    // angular can optimize some part of his code
    // (make more or less checks) according to an environment
    production: false,

    // your backend URL
    // you can then use it for example in a service
    // `${environment.urlBackend}/some/resource`
    urlBackend: '/api',

    // automatically detect browser language and set it
    // as the default one
    // if this language isn't available in the app, the
    // default language specified in src/app/core/core.module.ts
    // will be used
    useBrowserLanguageAsDefault: true,

    // should you keep mocks when building the app
    // or hit the real API
    mock: true,

    // in ms
    // when using mocked data, you can use that
    // variable with `.delay` to simulate a network latency
    httpDelay: 500,

    // should the URL be
    // http://some-domain#/your/app/routes (true)
    // or
    // http://some-domain/your/app/routes (false)
    hashLocationStrategy: false,

    // by default, if you use lazy loading, your (lazy loaded)
    // modules will be loaded only when needed
    // to avoid a small latency when the user needs it, you
    // can preload them all and the browser will download
    // them when idle so they're instantly available when needed
    preloadAllLazyLoadedModules: false,

    // wether to display debug informations or not
    // TIP : Use console.debug, console.warn and console.error
    // console.log should be used only in dev and never commited
    // this way you can find every console.log very easily
    debug: true,

    // cli environments are great but sometimes you might want to
    // have a dynamic environment (at runtime)
    // if so, take a look into /assets/runtime-environments
    loadRuntimeEnvironment: false,

    i18nPrefix: ''

  },
  production: false
};
