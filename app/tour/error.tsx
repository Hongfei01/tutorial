'use client';

function Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <div>
      <p>there was an error</p>
    </div>
  );
}
export default Error;
