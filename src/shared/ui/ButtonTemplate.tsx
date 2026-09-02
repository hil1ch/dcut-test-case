import { Button } from "@mantine/core";
import type { ReactNode } from "react";

interface IButtonTemplateProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  variant: string;
  color?: string;
  size?: string;
  leftSection?: ReactNode;
  classname?: string;
  onClick?: () => void;
}

export const ButtonTemplate = ({
  children,
  type,
  variant,
  color,
  size,
  leftSection,
  classname,
  onClick,
  ...restProps
}: IButtonTemplateProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size={size}
      leftSection={leftSection}
      onClick={onClick}
      className={classname}
      {...restProps}
    >
      {children}
    </Button>
  );
};
