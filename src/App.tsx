import React, { FC } from 'react';
import bg from '@/assets/images/bg.png';

export const App: FC = () => {
  return (
    <>
      <div className='flex justify-around'>
        <div className='hover:text-[70px]'>1</div>
        <div className='text-[25px]'>2</div>
      </div>
      <img className='size-12 rounded' src={bg} alt='' />
    </>
  );
};
