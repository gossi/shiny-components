import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('best-practices', function () {
    this.route('sparkles');
    this.route('singel');
    this.route('component-classification');
    this.route('naming-conventions');
  });

  this.route('patterns', function () {
    this.route('component-types');
    this.route('presentational-components');
    this.route('contextual-components');
    this.route('container-components');
    this.route('high-order-components');

    this.route('dom-api');

    this.route('inheritance');
    this.route('composition');
  });



});

export default Router;
