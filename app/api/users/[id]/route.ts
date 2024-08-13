export const GET = async (req: Request) => {
  console.log(req.url);
  console.log(req.url.split('users/')[1]);
  return Response.json({ msg: 'success' });
};
