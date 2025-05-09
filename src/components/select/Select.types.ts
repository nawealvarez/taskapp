export interface SelectProps {
  onChange: VoidFunction;
  defaultValue?: string;
  placeholder?: string;
  values?: Value[];
}

interface Value {
  label: string;
  value: string;
}
