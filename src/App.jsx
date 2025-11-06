import React, { useState, useMemo, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // useMemo → remembers calculated value
  const double = useMemo(() => count * 2, [count]);

  // useCallback → remembers function
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Double: {double}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
