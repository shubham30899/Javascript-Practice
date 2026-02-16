import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // stable reference

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
