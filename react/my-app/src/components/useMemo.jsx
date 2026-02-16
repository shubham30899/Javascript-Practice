// In React, useMemo is a hook that helps you optimize performance by memoizing (caching) the result of a calculation
//  so it doesn’t get recomputed on every render.
// useful when
// 1.You have expensive calculations.
// 2.You want to avoid unnecessary recalculations on each render.
// 3.You want to prevent unnecessary re-renders of child components by giving them stable props.


// useMemo is not only for expensive calculations, but also for ensuring referential equality of objects/arrays between renders.

/* In React, objects and arrays are compared by reference, not by value.
So, if you create an object/array inside your component, it will be a new reference on every render — even if the contents are the same.

That means if you pass it as a prop to a memoized child (React.memo), the child will re-render unnecessarily. */

import React, { useState, useMemo, useEffect } from "react";

const Child = React.memo(({ user }) => {
  console.log("Child rendered");
  return <p>{user.name}</p>;
});


function Memo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // Expensive calculation (simulated with a loop)
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum + count;
  }, [count]); 

  const user = useMemo(() => ({ name: "John", age: 30 }), []);

  useEffect(()=>{
    console.log("User object changed");
  },[user]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(!other)}>Toggle Other</button>
      <Child user={user} />
    </div>
  );
}

export default Memo;
