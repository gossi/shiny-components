import SparklesComponent, { tracked } from 'sparkles-component';
import TabPageComponent from 'shiny-components/src/ui/components/tabs/page/component';
import { next } from '@ember/runloop';

export default class TabsComponent extends SparklesComponent {

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

  activate(page: TabPageComponent) {
    this.activePage = page;
  }
}
