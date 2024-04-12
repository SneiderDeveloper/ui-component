import { Button as ButtonUI } from "@nextui-org/button";

interface Props {
  children: React.ReactNode | string;
  color?: string;
  size?: string;
  isDisabled?: boolean;
  radius?: string;
  variant?: string;
  isLoading?: boolean;
  gradient?: string;
  label?: string;
  isIconOnly?: boolean;
}

export const Button: React.FC<Props> = ({ children, ...attributes }) => {
  return (
    <>
      <ButtonUI {...attributes}>{children}</ButtonUI>
    </>
  );
};
