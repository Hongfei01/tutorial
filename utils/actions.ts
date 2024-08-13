'use server';

import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
export const createUser = async (previousState: any, formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;

  // const rawData = Object.fromEntries(formData);
  const user: User = { id: Date.now().toString(), firstName, lastName };
  try {
    saveUser(user);
    revalidatePath('/actions');
    return 'add user successfully';
  } catch (error) {
    return 'failed to add user';
  }
  //
  //redirect('/actions');
};

export const fetchUsers = async (): Promise<User[]> => {
  const users = await readFile('users.json', { encoding: 'utf8' });
  return users ? JSON.parse(users) : [];
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id');
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};

export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get('name') as string;
  console.log(name);
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};
