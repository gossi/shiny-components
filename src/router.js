import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('terminology', function () {
    this.route('classification');
  });

  this.route('patterns', function () {
    this.route('high-order-components');
    this.route('dom-api');

    this.route('inheritance');
    this.route('composition');
  });

  this.route('best-practices', function () {
    this.route('sparkles');
  });

});

export default Router;
