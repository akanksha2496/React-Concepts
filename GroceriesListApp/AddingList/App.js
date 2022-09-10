import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";

//initial state outside;//much better for clear things give you refernece
const initiList = [
  { name: "tomato", calorie: 20 },
  { name: "potato", calorie: 30 },
  { name: "sugar", calorie: 40 },
];
function App() {
  const [list, setList] = useState(initiList);
  return (
    <div className="App">
      <header className="App-header">
      <h2>Groceries List</h2>
      {
        list.map((v,i)=>{
          return <Item key={`${i}${v.name}${v.calorie}`} item={v}></Item>
        })
      }
      </header>
    </div>
  );
}

export default App;
