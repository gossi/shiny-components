import ModalComponent, { ModalArgs } from '../modal/component';

interface ModalDialogArgs extends ModalArgs {
  title?: string;
}

export default class ModalDialogInheritanceComponent extends ModalComponent<ModalDialogArgs> {
  get title(): string {
    return this.args.title;
  }
}
