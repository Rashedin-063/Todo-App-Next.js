"use client"
import { ButtonProps } from '@/types/buttonProps'

const Button = ({type, text, onClick, actionButton}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        actionButton
          ? 'bg-orange-600 rounded-r-full px-4 py-2 text-white'
          : 'bg-green-600 rounded-r-full px-4 py-2 text-white'
      }
    >
      {text}
    </button>
  );
}
export default Button