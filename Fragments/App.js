import "./App.css";
import NameTag from './components/nameTag';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Name List:</h1>
        <NameTag firstName="Akanksha" lastName="Dewangan"></NameTag>
        <NameTag firstName="Akshta" lastName="Nerkar"></NameTag>
        <NameTag firstName="Shruti" lastName="Sharma"></NameTag>
      </header>
    </div>
  );
}

export default App;
