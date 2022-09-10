import React,{useState} from "react";
import "./App.css";
import NameTag from './components/nameTag';

//initial state outside;//much better for clear things give you refernece
const initialName=[
  {firstName:"Akanksha", lastName:"Dewangan"},
  {firstName:"Akash", lastName:"Dewangan"},
  {firstName:"Akshata", lastName:"Nerkar"},
]
function App() {
  const [names,setNames]=useState(initialName);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Name List:</h1>
        <NameTag firstName={names[0].firstName} lastName={names[0].lastName}></NameTag>
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName}></NameTag>
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName}></NameTag>
      </header>
    </div>
  );
}

export default App;
