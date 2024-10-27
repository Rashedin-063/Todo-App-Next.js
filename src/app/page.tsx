import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] });

import AddTodo from '@/components/AddTodo';
import { PrismaClient } from '@prisma/client';
import Todo from '@/components/Todo';


const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

async function HomePage() {
  const data = await getData();
  return (
    <div className='py-20 flex justify-center flex-col items-center '>
      <h1
        className={`text-4xl uppercase ${headland.className} text-yellow-500`}
      >
        Todo App
      </h1>
      <div className='flex justify-center flex-col items-center w-[100px] mt-4'>
        <AddTodo />
      </div>
      {/* display data */}
      <div className='w-2/3 lg:w-1/3 flex flex-col gap-5 items-center justify-center mt-10'>
        {data.map((todo, idx) => (
          <div className='w-full' key={idx}>
            <Todo idx={idx} todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;
