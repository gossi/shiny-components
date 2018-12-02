import SparklesComponent from 'sparkles-component';

export interface ModalArgs {
  open?: boolean;
}

export default class ModalInheritanceComponent<A> extends SparklesComponent<A extends ModalArgs> {

}
