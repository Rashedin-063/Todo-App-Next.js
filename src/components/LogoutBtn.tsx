"use client"
import { signOut } from "next-auth/react";

function LogoutBtn() {
  return (
    <button
      onClick={() => signOut()}
      className='bg-orange-600 px-6 py-1 rounded-full pb-2 absolute top-4 right-4 lg:top-10 lg:right-10'
    >
      Logout
    </button>
  );
}
export default LogoutBtn