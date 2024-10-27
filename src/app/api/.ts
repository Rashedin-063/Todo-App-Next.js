// pages/api/test-connection.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/utils/prisma'; // Adjust the path based on your project structure

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Test the connection by performing a simple query
    const todos = await prisma.todo.findMany(); // Replace 'todo' with your model name
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res
      .status(500)
      .json({ success: false, message: 'Database connection failed' });
  }
}
