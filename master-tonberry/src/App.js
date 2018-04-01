import React, { Component } from 'react';
import Sidebar from "./components/Sidebar.js";
import Header from "./components/Header.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Sidebar />
        </div>
    );
  }
}

export default App;
