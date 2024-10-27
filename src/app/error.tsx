'use client';

import { ErrorProps } from '@/types/errorTypes';
import { useEffect } from 'react';

export default function Error({ error, reset } : ErrorProps): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='h-[60vh] flex flex-col justify-center items-center'>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
        className='bg-green-600 px-4 py-1 rounded-lg mt-4'
      >
        Try again
      </button>
    </div>
  );
}
