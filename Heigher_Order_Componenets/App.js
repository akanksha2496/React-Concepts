import "./App.css";
import NameTag from "./components/nameTag";
//Heigher order compoenente is pretty much same as
//heigher order function in javascript is a function
//that takes function as an argument and it returns another
//funtion.
//In HOC instead of taking function as arguments it takes component
//as arguments and return component.
//HOC is transform with props.

//components and base compoenents
//makeGreen takes an argumnet the basecomponenet
//with some props then it take props and add some into
//props return new modified component
const makeGreen = (BaseComponenet) => (props) => {
  //take propes of orgignal components and transform it.
  const addGreen = {
    style: {
      color: "green",
    },
  };
  const newProps = {
    ...props,
    ...addGreen,
  };
  return <BaseComponenet {...newProps} />;
};

const removeInline = (BaseComponenet) => (props) => {
  const newProps = { ...props };
  delete newProps.style;
  return <BaseComponenet {...newProps} />;
};

const GreenNameTag = makeGreen(NameTag);
const CleanNameTag = removeInline(NameTag);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List:</h1>
        <GreenNameTag firstName="Akanksha" lastName="Dewangan" />
        <CleanNameTag firstName="Akash" lastName="Dewangan" />
        <NameTag
          style={{ color: "blue" }}
          firstName="Aman"
          lastName="Dewangan"
        />
        <NameTag></NameTag>
      </header>
    </div>
  );
}

export default App;
