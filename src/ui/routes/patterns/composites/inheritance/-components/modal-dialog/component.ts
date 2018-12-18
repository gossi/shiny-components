import ModalInheritanceComponent, { ModalArgs } from 'shiny-components/src/ui/routes/inheritance/-components/modal/component';

interface ModalDialogArgs extends ModalArgs {
  title?: string;
}

export default class ModalDialogInheritanceComponent extends ModalInheritanceComponent<ModalDialogArgs> {
}
