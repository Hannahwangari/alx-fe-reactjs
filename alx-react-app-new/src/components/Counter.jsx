import React, { useState } from 'react';

function Counter() {
  // Step 1: Define state variable "count" using useState, initialized to 0
  const [count, setCount] = useState(0);

  // Step 2: Return JSX with buttons and display
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '2rem' }}>Current Count: {count}</p>

      {/* Step 3: Increment Button */}
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
        Increment
      </button>

      {/* Step 4: Decrement Button */}
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>
        Decrement
      </button>

      {/* Step 5: Reset Button */}
      <button onClick={() => setCount(0)} style={{ margin: '5px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
