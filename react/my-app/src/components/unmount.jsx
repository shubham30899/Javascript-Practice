import React, { useState, useEffect } from "react";

function Parent() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Hide Child" : "Show Child"}
      </button>

      {/* Conditional Rendering */}
      {showChild && <Child />}
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log("✅ Child mounted");

    // Cleanup on unmount
    return () => {
      console.log("❌ Child unmounted");
    };
  }, []);

  return <h2>I am the Child Component</h2>;
}

export default Parent;
