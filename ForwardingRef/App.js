import React, { useEffect, useRef } from "react";
import "./App.css";
import Input from "./components/Input.js";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  margineBottom: "10px",
};

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstNameKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Input
          ref={firstNameRef}
          placeholder="type first name here"
          style={inputStyle}
          onKeyDown={firstNameKeyDown}
        ></Input>
        <Input
          ref={lastNameRef}
          placeholder="type last name here"
          style={inputStyle}
          onKeyDown={firstNameKeyDown}
        ></Input>
      </header>
    </div>
  );
}

export default App;
