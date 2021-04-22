/**
 * Nuxt.js Configuration
 * @author Yuri A Taranov <me@flanker72.ru>
 */
export default {
   build: {
      babel: {
         presets({ envName }) {
            return [
               [
                  // Force set core-js version to proper build
                  "@nuxt/babel-preset-app",
                  { corejs: { version: 3 } }
               ]
            ];
         }
      }
   },

   // Enable Components autoimport
   components: [{
      path: '~/components/',
      prefix: 'vc'
   }],

   // Load global styles
   css: ["~/assets/styles/global"]
};
