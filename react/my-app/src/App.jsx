import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Memo from './components/useMemo.jsx'
import Lifecycle from './components/lifecycle.jsx'
import Parent from './components/unmount.jsx'
import ReactMemo from './components/memo.jsx'
import ReactErrorBoundary from './components/ErrorBoundary/error-boundary.jsx'
import HOC from './components/HOC.jsx'

function App() {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0);
  console.log("count", count);

  renderCount.current += 1;
  console.log("renderCount", renderCount.current);

  const items = ["Apple", "Banana", "Cherry"];

  const handleClick = (event) => {
    setCount(count + 1)
    console.log("Event type:", event.type);        // click
    console.log("Event target:", event.target);    // button element
    event.preventDefault();                         // prevent default action
  };


  return (
    // <div>
    //   <p>You clicked {count} times</p>
    //   <button onClick={handleClick}>
    //     Click Me
    //   </button>
    // </div>
    <Memo/>
  )

  // return React.createElement(
  //   "div",
  //   { className: "container" },
  //   React.createElement("p", null, `You clicked ${count} times`),
  //   React.createElement(
  //     "button",
  //     { onClick: () => setCount(count + 1) },
  //     "Click Me"
  //   )
  // );

}

export default App
