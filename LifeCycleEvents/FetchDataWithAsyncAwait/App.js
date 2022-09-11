import React, { useState, useEffect } from "react";
import "./App.css";

const initProfile = {
  followers: null,
  publicRepo: null,
};
//fetch data from server and loading on our fetch..
//make sure page loaded b4 load it on our page
function App() {
  const [profile, setProfile] = useState(initProfile);

  //frtch data from servere
  //we can use promises or Async await
  async function getProfile() {
    //ftech api is recent addition to js
    const response = await fetch("https://api.github.com/users/akanksha2496");
    const json = await response.json();

    setProfile({
      followers: json.followers,
      publicRepo: json.public_repos,
    });
  }

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch Data</h1>
        <h3>{`follower:${profile.followers}, repos:${profile.publicRepo}`}</h3>
      </header>
    </div>
  );
}

export default App;
