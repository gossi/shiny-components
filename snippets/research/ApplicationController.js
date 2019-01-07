import Controller from '@ember/controller';

export default class ApplicationController extends Controller {

  whoAmI() {
    console.log('whoami', this);
  }
}