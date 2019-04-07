import Component from '@glimmer/component';

export interface ModalArgs {
  open?: boolean;
}

export default class ModalComponent<T extends ModalArgs> extends Component<T> {
}
