import React, { Component } from "react";
import "./App.css";
import FirstCarPage from "./Components/FirstCarPage";
import data from "./Components/cars.json";
import { HashRouter, Route, Link } from "react-router-dom";
import CarRegForm from "./Components/Form";
import CarList from "./Components/CarList";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route path="/form" component={CarRegForm} />
        <Route path="/" exact component={CarList} />
      </HashRouter>
    );
  }
}

export default App;
