import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('introduction');
  this.route('best-practices', function () {
    this.route('singel');
    this.route('naming-conventions');
  });

  this.route('patterns', function () {
    this.route('component-types', function () {
      this.route('presentational-components');

      this.route('provider-components');
      this.route('contextual-components');
    });

    this.route('component-classification');

    this.route('composites', function () {
      this.route('inheritance');
      this.route('composition');
    });

    this.route('dom-api');
  });
});

export default Router;
