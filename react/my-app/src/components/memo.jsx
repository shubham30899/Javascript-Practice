import React, { useState } from "react";

const Child = React.memo(({ name,count }) => {
  console.log("Child rendered");
  return <p>Hello, {name}</p>;
});

function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Shubham" count={count}/>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ReactMemo;
