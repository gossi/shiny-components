import ModalInheritanceComponent, { ModalArgs } from '../modal/component';
import { arg } from 'sparkles-decorators';

interface ModalDialogArgs extends ModalArgs {
  title?: string;
}

export default class ModalDialogInheritanceComponent extends ModalInheritanceComponent<ModalDialogArgs> {
  @arg title!: string;
}
