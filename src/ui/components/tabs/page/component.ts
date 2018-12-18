import SparklesComponent from 'sparkles-component';
import TabsComponent from 'shiny-components/src/ui/components/tabs/component';
import { arg } from 'sparkles-decorators';
// import { computed } from '@ember-decorators/object';

interface Args {
  parent: TabsComponent;
  title: string;
}

export default class TabPageComponent extends SparklesComponent<Args> {

  @arg title!: string;

  constructor(args: Args) {
    super(args);

    this.args.parent.registerPage(this);
  }
}
