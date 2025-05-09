import { Loader2 } from 'lucide-react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/utils';
import styles from './Button.module.scss';
import type { ButtonProps } from './Button.types';

function Button({
  className,
  children,
  isLoading,
  disabled,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      disabled={disabled || isLoading}
      variant={variant}
      className={cn(
        styles.button,
        styles[`button--${variant}`],
        isLoading && styles['button--loading'],
        className
      )}
      {...props}
    >
      {isLoading && (
        <Loader2 data-testid="loader" className="mr-2 h-4 w-4 animate-spin" />
      )}
      {children}
    </ShadcnButton>
  );
}

Button.displayName = 'Button';
export default Button;
