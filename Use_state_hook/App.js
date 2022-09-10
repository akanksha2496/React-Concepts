
//useState is hook- prebuild
//all hook is start with use*
import React, { useState } from "react";
import "./App.css";

function App() {
  //[getter, setter]= initial value
  const [age, setAge] = useState(21);
  const ageUpHandle = () => {
    setAge(age + 1);
  };
  const ageDownHandle = () => {
    setAge(age - 1);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Use State Hook</h1>
      <h2>Age: {age}</h2>
      <button onClick={ageUpHandle}>Age Up</button>
      <button onClick={ageDownHandle}>Age Down</button>
    </div>
  );
}

export default App;
