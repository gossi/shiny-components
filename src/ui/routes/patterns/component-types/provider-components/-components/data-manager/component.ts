import Component from '@glimmer/component';

interface DataManagerArgs {
  items: any[];
}

export default class DataManagerComponent extends Component<DataManagerArgs> {

  get sortedItems(): any[] {
    return this.args.items.sort();
  }

}
