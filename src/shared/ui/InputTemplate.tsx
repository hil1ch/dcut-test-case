import { Input } from "@mantine/core";

interface IInputTemplateProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: () => void;
}

export const InputTenplate = ({
  placeholder,
  type,
  value,
  onChange,
  ...restProps
}: IInputTemplateProps) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
};
