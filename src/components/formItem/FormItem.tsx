import { cn } from '@/utils';
import {
  FormItem as ShadcnFormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '../ui/form';
import type { FormItemProps } from './FormItem.types';

function FormItem({
  children,
  label,
  className,
  labelClassName,
  formControl = true,
  required,
}: FormItemProps) {
  return (
    <ShadcnFormItem className={className}>
      {label && (
        <FormLabel className={cn('text-sm', labelClassName)}>
          {label} {required && <span className="text-red-500">*</span>}
        </FormLabel>
      )}
      {formControl ? <FormControl>{children}</FormControl> : children}
      <FormMessage />
    </ShadcnFormItem>
  );
}

FormItem.displayName = 'FormItem';
export default FormItem;
