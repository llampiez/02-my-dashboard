'use client';

import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);
  return (
    <div className='flex flex-wrap p-2 items-center justify-center'>
      <SimpleWidget
        title={`${counter}`}
        label='Contador'
        subTitle='Productos agregados'
        icon={<IoCartOutline size={70} className='text-blue-500' />}
        href='/dashboard/counter'
      />
    </div>
  );
};
