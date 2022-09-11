import React, { useState, useEffect } from "react";
import "./App.css";

let born = false;
function App() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  //provide empty array - it only runs right after it mounted for the first time.
  // we can use useEffect mutiple time
  useEffect(() => {
    if(born){
      document.title="nirvana attained";
    }
  }, [nirvana]);

  useEffect(() => {
    console.log("i am born");
  }, []);

  useEffect(() => {
    if (born) {
      console.log("make mistakr and learn");
    } else {
      born = true;
    }
    if (growth > 70) {
      setNirvana(true);
    }

    return function cleanup(){
      console.log('cleanup after mistakes');
    }
  });

  function growHandle() {
    setGrowth(growth + 10);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use Effect</h1>
        <h3>growth:{growth}</h3>
        <button onClick={growHandle}>Learn and Grow</button>
      </header>
    </div>
  );
}

export default App;
