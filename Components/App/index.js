import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./style.css";

import List from "../List";
import SearchBox from "../SearchBox";

import data from "../../data.json";

class App extends Component {
  state = {
    searchString: ""
  };

  setSearchString = newSearchString => {
    this.setState({ searchString: newSearchString });
    console.log("new search string", newSearchString);
  };

  render() {
    return (
      <div className="App">
        <h1>Fish application</h1>
        <SearchBox setSearchString={this.setSearchString} />
        <List articles={data.fishes} />
      </div>
    );
  }
}

export default App;
