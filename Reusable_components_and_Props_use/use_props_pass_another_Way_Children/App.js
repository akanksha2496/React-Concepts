import "./App.css";
import NameTag from './components/nameTag';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Name List:</h1>
        <NameTag>Akanksha</NameTag>
        <NameTag >Akash</NameTag>
        <NameTag>Aman</NameTag>
      </header>
    </div>
  );
}

export default App;

