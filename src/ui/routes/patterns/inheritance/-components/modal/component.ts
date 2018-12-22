import SparklesComponent from 'sparkles-component';

export interface ModalArgs {
  open?: boolean;
}

export default class ModalInheritanceComponent<T extends ModalArgs> extends SparklesComponent<T> {
}
