import { action } from '@ember/object';
import { next } from '@ember/runloop';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import TabPageComponent from 'shiny-components/src/ui/components/tabs/page/component';

export default class TabsComponent extends Component {

  @tracked pages: TabPageComponent[] = [];
  @tracked activePage?: TabPageComponent;

  registerPage(page: TabPageComponent) {
    this.pages.push(page);

    next(this, () => {
      this.pages = this.pages;
    });

    if (!this.activePage) {
      this.activePage = page;
    }
  }

  @action
  activate(page: TabPageComponent) {
    this.activePage = page;
  }
}
