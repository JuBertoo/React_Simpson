// src/App.js
import React, { Component } from "react";
import logo from "./donut.png";
import logo2 from "./homer.svg"
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes"
import Lamp from "./Lamp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
 
  render() {
    const logoAnim = this.state.working ? "App-logo" : "App-logo-scale";
    const logoChange = this.state.working ? logo : logo2;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoChange} className={logoAnim} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>
        Oh! Un Donuts 
        </button>
        <Lamp on />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Quotes
        />
      </div>
    );
  }
}

export default App;
