import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log("Component mounted");

    // componentWillUnmount
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // componentDidUpdate (for count)
  useEffect(() => {
    if (count > 0) {
      console.log("Count updated:", count);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Lifecycle;