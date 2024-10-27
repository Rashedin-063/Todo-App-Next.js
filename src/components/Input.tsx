import { InputProps } from "@/types/inputProps";

const Input = ({name, type, placeholder, value}: InputProps) => {
  return (
    <>
      <input
        className='rounded-l-full p-2 border-gray-200 border pl-4 focus:outline-yellow-600 text-black text-lg'
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};
export default Input