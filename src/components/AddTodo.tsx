import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] });

const AddTodo = () => {
  return (
    <div className='py-20 flex justify-center flex-col items-center min-h-screen'>
      <h1 className={`text-4xl uppercase ${headland.className}`}>Todo App</h1>
    </div>
  );
};
export default AddTodo;
