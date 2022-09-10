import React, { useState } from "react";
import "./App.css";
import NameTag from "./components/nameTag";

//initial state outside;//much better for clear things give you refernece
const initialName = [
  { firstName: "Akanksha", lastName: "Dewangan" },
  { firstName: "Akash", lastName: "Dewangan" },
  { firstName: "Akshata", lastName: "Nerkar" },
  { firstName: "Test", lastName: "Debugger" },
];
function App() {
  const [names, setNames] = useState(initialName);
  return (
    <div className="App">
      <header className="App-header"></header>
        <h1 className="name title">Name List:</h1>
        {/* use map reduce instead of for */}
        {
          names.map((v,i)=>{
            // key = to provide unique key = here append values of names and index.
          return <NameTag key={`${i}${v.firstName}${v.lastName}`} firstName={v.firstName} lastName={v.lastName}/>;
           })
        }
        {/* <NameTag firstName={names[0].firstName} lastName={names[0].lastName}></NameTag>
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName}></NameTag>
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName}></NameTag> */}
      
    </div>
  );
}

export default App;
