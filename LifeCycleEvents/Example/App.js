import React, { useState, useEffect } from "react";
import "./App.css";

const initXY = {
  x: null,
  y: null,
};

function App() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);
  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 3000);
    return () => {
      clearInterval(handle);
    };
  });

  function mouseMoveHandle(e) {
    setXY({
      x: e.clientX,
      y: e.clientY,
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandle);

    return () => {
      window.addEventListener("mousemove", mouseMoveHandle);
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Use Effect Exmaples</h1>
        <h3>Date & Time : {time}</h3>
        <h3>{`x:${xy.x}, y:${xy.y}`}</h3>
      </header>
    </div>
  );
}

export default App;
