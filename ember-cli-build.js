'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const walkSync = require('walk-sync');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    snippetPaths: ['src', 'snippets'],
    snippetSearchPaths: ['src'],

    sourcemaps: {
      enabled: true,
      extensions: ['js', 'css']
    },

    cssModules: {
      plugins: {
        before: [
          require('postcss-nested')
        ],
        after: [
          require('autoprefixer')('last 2 versions')
        ]
      }
    },

    prember: {
      urls: function () {
        const routes = walkSync('src/ui/routes', { ignore: ['application'] });
        const urls = ['/'];
        for (const file of routes) {
          if (file.endsWith('/') && !file.includes('/-components') && !file.endsWith('index/')) {
            urls.push('/' + file);
          }
        }

        return urls;
      }
    }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
