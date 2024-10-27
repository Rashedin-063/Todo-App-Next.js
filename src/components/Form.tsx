'use client';

import { FormProps } from '@/types/formProps';
import { useRef } from 'react';

const Form = ({ children, action, className, onSubmit }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    const formData = new FormData(ref.current!);
    await action(formData);
    ref.current?.reset();
    onSubmit?.(); 
  };

  return (
    <form className={className} onSubmit={handleSubmit} ref={ref}>
      {children}
    </form>
  );
};

export default Form;
