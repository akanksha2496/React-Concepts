import "./App.css";
const nameStyle = {
  color: "gray",
  border: "1px solid gray",
  paddingTop: "5px",
  paddingBottom: "5px",
  width:"300px"
};

const nameTagTitle={
  color:"yellow",
  borderColor:"yellow",
  borderStyle:"dotted"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Name List:</h1>
        <h2 className="name">Akash</h2>
        <h2 className="name">Akanksha</h2>
      </header>
    </div>
  );
}

export default App;
