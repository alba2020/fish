import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./style.css";

class Article extends Component {
  // v1
  //            getInitialState: function() {
  //                return { selected: false }
  //            },

  //
  //            click: function() {
  //                this.setState({ selected: !this.state.selected });
  //            },

  // v2
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       selected: false
  //     };

  //     // this.clickHandler = this.clickHandler.bind(this);
  //     this.clickHandler = () =>
  //       this.setState({
  //         selected: !this.state.selected
  //       });
  //   }

  // v3
  state = {
    selected: false
  };

  clickHandler = () =>
    this.setState({
      selected: !this.state.selected
    });

  //   clickHandler() => {
  //     console.log("click()");
  //   };

  render() {
    // console.log("render");
    return (
      <div className="article">
        <h1 className="article__header"> {this.props.title} </h1>
        <h2 className="article__author"> {this.props.author} </h2>
        <p className="article__text"> {this.props.text} </p>
        <img
          src={this.props.image}
          className={this.state.selected ? "image_selected" : "image_normal"}
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}

export default Article;
