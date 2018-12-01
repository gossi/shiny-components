import SparklesComponent from 'sparkles-component';
import { arg } from 'sparkles-decorators';
import { guidFor } from '@ember/object/internals';

export interface Args {
  open?: boolean;
}

export default class ModalInheritanceComponent<A> extends SparklesComponent<A extends Args> {
  // arguments
  @arg('open') opened: boolean = false;
  @arg id: string = guidFor(this);

  // // components
  // headerComponent: string = 'header';
  // bodyComponent: string = 'body';

  didInsertElement() {
    super.didInsertElement();

    const modal = document.getElementById(this.id) as HTMLElement;

    Object.defineProperties(modal, {
      "open": {
        value: () => {
          this.open();
        }
      },

      "close": {
        value: () => {
          this.close();
        }
      },

      "toggle": {
        value: () => {
          this.toggle();
        }
      }
    });
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
  }
}
