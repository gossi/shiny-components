import ModalInheritanceComponent, { Args } from 'sparkles-test/src/ui/components/modal-inheritance/component';

interface ModalDialogArgs extends Args {
  title?: string;
}

export default class ModalDialogInheritanceComponent extends ModalInheritanceComponent<ModalDialogArgs> {
}
