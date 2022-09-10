import "./App.css";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List:</h1>
        <NameTag firstName="Akanksha" lastName="Dewangan"></NameTag>
        <NameTag firstName="Akash" lastName="Dewangan"></NameTag>
      </header>
    </div>
  );
}

export default App;
