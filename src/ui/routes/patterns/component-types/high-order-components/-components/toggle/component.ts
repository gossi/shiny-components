import { guidFor } from '@ember/object/internals';
import SparklesComponent from 'sparkles-component';
import { arg } from 'sparkles-decorators';

interface Args {
  id?: string;
  checked?: boolean;
  label?: string;
  onLabel?: string;
  offLabel?: string;
  enabled?: boolean;
  changed?: (value: boolean) => void;

  labelComponent?: string;
  switchComponent?: string;
}

export default class ToggleComponent extends SparklesComponent<Args> {
  @arg id: string = guidFor(this);
  @arg enabled: boolean = true;
  @arg checked: boolean = false;

  @arg labelComponent: string = 'label';
  @arg switchComponent: string = 'switch';

  toggled: boolean = false;

  change(checked?: boolean) {
    if (checked === undefined) {
      checked = !this.checked;
    }

    if (this.enabled && this.checked !== checked) {
      this.checked = checked;

      if (this.args.changed) {
        this.args.changed(this.checked);
      }
    }
  }
}
