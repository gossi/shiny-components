import SparklesComponent from 'sparkles-component';
import { guidFor } from '@ember/object/internals';
import { arg } from 'sparkles-decorators';

interface Args {
  id?: string
}

export default class ElementReferenceComponent extends SparklesComponent<Args> {
  @arg id: string = guidFor(this);

  didInsertElement() {
    document.getElementById(this.id);
  }
}
