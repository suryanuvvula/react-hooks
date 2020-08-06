import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import UseRefExample from "./Components/UseRef";
import UseMemoExample from "./Components/UseMemo";
import ClassContextComponent from "./Components/ClassContextComponent";
import FunctionContextComponent from "./Components/FunctionContextComponent";
import { MovieProvider } from "./Components/MovieContext";

export const ThemeContext = React.createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState('');

  function toggle() {
    setDarkTheme(prevValue => !prevValue);
  }
  return (
    <div>
      <UseState></UseState>
      <UseRefExample></UseRefExample>
      <UseMemoExample></UseMemoExample>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggle}>Toogle Theme</button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
      <MovieProvider />
      <UseEffect></UseEffect>

    </div>
  );
}

export default App;
