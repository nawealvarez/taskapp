export interface ModalProps {
  open: boolean;
  onClose: VoidFunction;
  title: string;
  description?: string;
  children: React.ReactNode;
  childrenFooter?: React.ReactNode;
}