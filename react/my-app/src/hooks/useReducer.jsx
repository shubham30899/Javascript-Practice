import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}


// Example 2: Form State Management with useReducer
const initialState1 = { username: "", email: "" };

function reducer(state, action) {
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "reset":
      return initialState1;
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState1);

  return (
    <div>
      <input
        placeholder="Username"
        value={state.username}
        onChange={e => dispatch({ type: "setUsername", payload: e.target.value })}
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={e => dispatch({ type: "setEmail", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <p>Username: {state.username}</p>
      <p>Email: {state.email}</p>
    </div>
  );
}

