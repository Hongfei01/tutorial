'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={btnStyle} type='submit'>
      {pending ? 'pending...' : 'submit'}
    </button>
  );
};

const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';
export default SubmitButton;
