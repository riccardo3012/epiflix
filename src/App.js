import React from "react";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import Carro from "./Components/MyCarousel";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <MyNavbar /> {Profile}
      <header className="App-header">
        <p>
          <Carro />
        </p>
        <p>
          <Carro />
        </p>
        <p>
          <Carro />
        </p>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
