import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormControl } from '@/components/ui/form';
import type { SelectProps } from './Select.types';
function Select({ onChange, defaultValue, placeholder, values }: SelectProps) {
  return (
    <ShadcnSelect onValueChange={onChange} defaultValue={defaultValue}>
      <FormControl>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {values?.map((value) => (
          <SelectItem key={value.value} value={value.value}>
            {value.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
}

Select.displayName = 'Select';
export default Select;
