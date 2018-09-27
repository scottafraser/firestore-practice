import React, { Component } from "react";
import Users from "./components/Users";
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Users />
      </div>
    );
  }
}

export default App;
