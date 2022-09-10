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
  const [editable, setEditable] = useState(false); //non editable false
  const removeItemHandle = (e) => {
    // console.log('i am clicked')
    //how get i know which event got clicked
    //dir give more infor them logs.
    //have property called tareget. Give me which element clicked.
    //add some property that differetiate.
    console.dir(e.target.name);
    //we remove it by names
    const filteredList = list.filter((v) => v.name !== e.target.name);
    setList(filteredList);
  };

  function makeEditableHandle() {
    setEditable(true);
  }

  //e is synthetic event
  function keyPressHandle(e, i) {
    // console.dir(e.key);
    if (e.key === "Enter") {
      console.dir(e.key);
      setEditable(!editable);
      console.log(i);
      const copyList = [...list];
      copyList[i].name = e.target.value;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Groceries List</h2>
        {list.map((v, i) => {
          return (
            <Item
              key={`${i}${v.name}${v.calorie}`}
              item={v}
              onClick={removeItemHandle}
              editable={editable}
              onDoubleClick={makeEditableHandle}
              onKeyPress={keyPressHandle}
              index={i}
            ></Item>
          );
        })}
      </header>
    </div>
  );
}

export default App;
