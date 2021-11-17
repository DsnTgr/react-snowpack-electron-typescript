/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: { url: '/dist' },
    public: { url: "/", static: true },
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    "baseUrl": "./"
  },
};
