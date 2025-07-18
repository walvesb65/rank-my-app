import { Button as AntButton } from "antd";
import type { ButtonProps } from "antd";

export const Button = ({ children, ...props }: ButtonProps) => (
  <AntButton {...props}>{children}</AntButton>
);
