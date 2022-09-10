import "./App.css";
import NameTag from './components/nameTag';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Name List:</h1>
        <NameTag name="Akanksha"></NameTag>
        <NameTag name="Akash"></NameTag>
        <NameTag name="Aman"></NameTag>
      </header>
    </div>
  );
}

export default App;
