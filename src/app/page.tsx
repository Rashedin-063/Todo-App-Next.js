import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] });

import AddTodo from '@/components/AddTodo';

function HomePage() {
  return (
    <div className='py-20 flex justify-center flex-col items-center '>
      <h1
        className={`text-4xl uppercase ${headland.className} text-yellow-500`}
      >
        Todo App
      </h1>
      <div className='flex justify-center flex-col items-center w-[100px] mt-4'>
        <AddTodo/>
      </div>
    </div>
  );
}
export default HomePage;
