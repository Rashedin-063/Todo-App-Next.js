import { ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
className ?: string;
onSubmit ?: () => void;
}