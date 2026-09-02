import { Input } from "@mantine/core";
import type { ReactNode } from "react";

interface IInputTemplateProps {
  placeholder: string;
  type: string;
  value: string;
  required?: boolean;
  leftSection?: ReactNode;
  onChange: () => void;
}

export const InputTemplate = ({
  placeholder,
  type,
  value,
  onChange,
  required,
  leftSection,
  ...restProps
}: IInputTemplateProps) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      leftSection={leftSection}
      {...restProps}
    />
  );
};
