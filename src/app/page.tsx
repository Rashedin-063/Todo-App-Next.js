import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] });

import AddTodo from '@/components/AddTodo';
import { PrismaClient } from '@prisma/client';
import Todo from '@/components/Todo';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Link from 'next/link';
import LogoutBtn from '@/components/LogoutBtn';

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
  const session = await getServerSession(authOptions);
  
  console.log("session", session);

   
     
     
  if (session) {
   return (
     <div className='py-20 flex justify-center flex-col items-center relative'>
      
       <LogoutBtn/>
       
       <h1
         className={`text-4xl uppercase ${headland.className} text-yellow-500`}
       >
         Todo App
       </h1>
       <div className='flex justify-center flex-col items-center w-[100px] mt-4'>
         <AddTodo />
       </div>
       {/* display data */}
       <div className='w-[90%] lg:w-1/2 flex flex-col gap-5 items-center justify-center mt-16'>
         {data.map((todo, idx) => (
           <div className='w-full' key={idx}>
             <Todo idx={idx} todo={todo} />
           </div>
         ))}
       </div>
     </div>
   );
    
  } else {
    return (
      <div className=' min-h-[100vh] flex flex-col justify-center items-center'>
        <h1
          className={`text-4xl uppercase ${headland.className} text-yellow-500 mb-20`}
        >
          Todo App
        </h1>
        <button className='bg-yellow-600 px-8 py-4 rounded-full text-lg'>
          <Link href={'/api/auth/signin'}>Please Login</Link>
        </button>
      </div>
    );
}
 
}
export default HomePage;
