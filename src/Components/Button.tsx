import { ReactNode } from "react";

type variante = "primary" | "secondary";

type buttonType = "button" | "submit";

type Props = {
  children: ReactNode;
  variante?: variante;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

function Button({
  children,
  variante = "primary",
  onClick,
  type = "button",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variante}`}>
      {children}
    </button>
  );
}

export default Button;
