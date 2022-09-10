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
        <h1 style={{...nameStyle,...nameTagTitle}}>Name List:</h1>
        <h2 style={nameStyle}>Akash</h2>
        <h2 style={nameStyle}>Akanksha</h2>
      </header>
    </div>
  );
}

export default App;
