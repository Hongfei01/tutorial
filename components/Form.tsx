'use client';
import { createUser } from '@/utils/actions';
import SubmitButton from './SubmitButton';
import { useFormState } from 'react-dom';

const Form = () => {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      <h2>add user</h2>

      <input
        className={inputStyle}
        type='text'
        name='firstName'
        defaultValue={'peter'}
        required
      />
      <input
        className={inputStyle}
        type='text'
        name='lastName'
        defaultValue={'smith'}
        required
      />
      <SubmitButton />

      {message && <p>{message}</p>}
    </form>
  );
};

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';

export default Form;
