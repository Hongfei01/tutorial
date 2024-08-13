import { deleteUser, removeUser } from '@/utils/actions';
const DeleteButton = ({ id }: { id: string }) => {
  const deleteUserWithoutId = removeUser.bind(this, id);
  return (
    <form action={deleteUserWithoutId}>
      <input type='hidden' name='name' value='jim' />
      <button
        className='bg-red-400 text-white text-xs rounded p-2'
        type='submit'
      >
        Delete it
      </button>
    </form>
  );
};
export default DeleteButton;
