import { fetchUsers, saveUser } from '@/utils/actions';

import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  console.log(req.url);
  console.log(req.nextUrl);
  console.log(req.nextUrl.searchParams.get('id'));
  const users = await fetchUsers();
  //return Response.json({ users });
  return NextResponse.redirect(new URL('/', req.url));
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const newUser = { id: Date.now().toString(), ...user };
  await saveUser(newUser);

  return Response.json({ msg: 'get it' });
};
