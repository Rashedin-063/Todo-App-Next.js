import { User } from '@/types/user';
import { Credentials } from '@/types/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser?.password === password) {
            console.log(currentUser);

            return { ...currentUser };
          }
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);



export { handler as GET, handler as POST };
  
  
  const users: User[] = [
    {
      id: 1,
      name: 'Rashedin Islam',
      email: 'rashedinislam.06@gmail.com',
      password: '123456',
      type: 'admin',
    },
    {
      id: 2,
      name: 'Arefin',
      email: 'a@gmail.com',
      password: 'password',
      type: 'admin',
    },
    {
      id: 3,
      name: 'Shashwoto',
      email: 's@gmail.com',
      password: 'password',
      type: 'admin',
    },
  ];

