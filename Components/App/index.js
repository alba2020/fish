import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes, { string } from "prop-types";

import data from "../../data.json";
import "./style.css";

import FishList from "../FishList";
import Options from "../Options";
import ShareFacebook from "../ShareFacebook";

class App extends Component {
  state = {
    searchString: "",
    upperRegister: false
  };

  setSearchString = event => {
    this.setState({ searchString: event.target.value });
  };

  setUpperRegister = () => {
    this.setState({ upperRegister: !this.state.upperRegister });
  }

  render() {
    const articles = data.fishes
    return (
      <div className="App">
        <h1>Fish application</h1>
        <ShareFacebook />
        <Options 
          setSearchString = {this.setSearchString} 
          searchString = {this.state.searchString}
          setUpperRegister = {this.setUpperRegister} 
          upperRegister = {this.state.upperRegister}
        />
        {/*<SearchBox setSearchString = {this.setSearchString} searchString = {this.state.searchString} />
        <Button setUpperRegister = {this.setUpperRegister} upperRegister = {this.state.upperRegister} />*/}
        <FishList 
            articles = {data.fishes} 
            searchString = {this.state.searchString} 
            upperRegister = {this.state.upperRegister}
        />
      </div>
    );
  }
}

export default App;
