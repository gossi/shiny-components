import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';
import { tracked } from '@glimmer/tracking';

interface ToggleArgs {
  id?: string;
  checked?: boolean;
  label?: string;
  onLabel?: string;
  offLabel?: string;
  enabled?: boolean;
  change?: (value: boolean) => void;

  labelComponent?: string;
  switchComponent?: string;
}

export default class ToggleComponent extends Component<ToggleArgs> {
  id: string;

  @tracked checked: boolean;
  enabled: boolean;

  labelComponent: string;
  switchComponent: string;

  constructor(owner: Owner, args: ToggleArgs) {
    super(owner, args);

    // set initial state
    this.id = args.id || guidFor(this);
    this.enabled = args.enabled || true;
    this.checked = args.checked || false;

    this.labelComponent = args.labelComponent || 'label';
    this.switchComponent = args.switchComponent || 'switch';
  }

  @action
  change(checked?: boolean) {
    if (checked === undefined) {
      checked = !this.checked;
    }

    if (this.enabled && this.checked !== checked) {
      this.checked = checked;

      if (this.args.changed) {
        this.args.change(this.checked);
      }
    }
  }
}
