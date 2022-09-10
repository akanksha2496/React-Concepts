import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";

//initial state outside;//much better for clear things give you refernece
const initiList = [
  { name: "tomato", calorie: 20 },
  { name: "potato", calorie: 30 },
  { name: "sugar", calorie: 140 },
];
function App() {
  const [list, setList] = useState(initiList);
  const removeUnhealthyHandle = (e) =>{
   //dont modify the state directly 
   //always create copy of that
   const filteredList = list.filter(v=>v.calorie<=50)
   setList(filteredList);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h2>Groceries List</h2>
      {
        list.map((v,i)=>{
          return <Item key={`${i}${v.name}${v.calorie}`} item={v}></Item>
        })
      }
      <button onClick={removeUnhealthyHandle} className="remove-button"> Remove uhealthy</button>
      </header>
    </div>
  );
}

export default App;
