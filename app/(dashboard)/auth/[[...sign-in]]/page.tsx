const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params['sign-in'][1]);
  return <div>SignPage</div>;
};
export default SignInPage;
