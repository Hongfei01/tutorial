'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        className='bg-green-500 py-2 px-2 rounded'
        onClick={() => setCount((count) => count + 1)}
      >
        Increase
      </button>
    </div>
  );
}
export default Counter;
