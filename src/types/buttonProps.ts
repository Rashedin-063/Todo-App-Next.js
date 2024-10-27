import { ReactNode } from "react"

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}