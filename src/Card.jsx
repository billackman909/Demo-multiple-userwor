import React, { useState, useMemo } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);

  // 🧮 Expensive calculation
  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // only recalculates when count changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Double: {double}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
// use memo example 
export default Cart;