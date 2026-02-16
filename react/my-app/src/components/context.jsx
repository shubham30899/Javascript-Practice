import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Create a Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create Components that use the context
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Current Theme: {theme} (Click to Toggle)
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <h1>Context API Example</h1>
      <ThemedButton />
    </ThemeProvider>
  );
}

export default App;
