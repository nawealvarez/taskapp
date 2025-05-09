import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { ModalProps } from './Modal.types';
import styles from './Modal.module.scss';
import { cn } from '@/utils';

function Modal({
  open,
  onClose,
  title,
  description,
  children,
  childrenFooter,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={cn(styles.modal__wrapper, 'scrollbar-style')}>
        <DialogHeader>
          <DialogTitle className="text-xl font-normal">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {childrenFooter && <DialogFooter>{childrenFooter}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}

Modal.displayName = 'Modal';
export default Modal;
