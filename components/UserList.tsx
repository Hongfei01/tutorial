import { fetchUsers } from '@/utils/actions';
import DeleteButton from './DeleteButton';

const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div>
      {users.length ? (
        users.map((user) => {
          return (
            <h4
              className='capitalize text-lg flex justify-between items-center mb-2'
              key={user.id}
            >
              {user.firstName} -{user.lastName}
              <DeleteButton id={user.id} />
            </h4>
          );
        })
      ) : (
        <p>there are no users</p>
      )}
    </div>
  );
};
export default UserList;
