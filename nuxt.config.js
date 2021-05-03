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

   modules: ["nuxt-i18n"],

   i18n: {
      locales: [
         {
            code: "en",
            file: "en.json"
         },
         {
            code: "ru",
            file: "ru.json"
         }
      ],
      defaultLocale: "en",
      strategy: "no_prefix",
      langDir: "~/locales/"
   },

   // Enable Components autoimport
   components: [
      {
         path: "~/components/",
         prefix: "vc"
      }
   ],

   // Load global styles
   css: ["~/assets/styles/global"],

   // Load plugins
   plugins: ["~/plugins/composition"],

   // Configure Storybook addon
   storybook: {
      addons: ["@storybook/addon-controls", "@storybook/addon-actions"],
      stories: ["~/stories/**/*.stories.js"],
      decorators: ["<div class='vc-theme_light'><story/></div>"]
   }
};
