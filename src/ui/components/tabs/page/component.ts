import Component from '@glimmer/component'
import TabsComponent from 'shiny-components/src/ui/components/tabs/component';
import { Owner } from '@glimmer/di';

interface TabPageArgs {
  parent: TabsComponent;
  title: string;
}

export default class TabPageComponent extends Component<TabPageArgs> {
  title: string;

  constructor(owner: Owner, args: TabPageArgs) {
    super(owner, args);

    this.args.parent.registerPage(this);
    this.title = args.title;
  }
}
