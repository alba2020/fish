import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./style.css";

import Article from "../Article";

const List = props => (
  //    constructor(props) {
  //        super(props);
  //        this.state = {allArticles: data.fishes}; //get data from server
  //    }
  //
  //    select(key) {
  //        var newArticles = this.state.allArticles.map(function(a, index) {
  //            return {
  //                title: a.title,
  //                author: a.author,
  //                text: a.text,
  //                image: a.image,
  //                selected: (key === index) ? true : false
  //            }
  //        });
  //        this.setState = { allArticles: newArticles };
  //    }

  //                console.log(this.state.allArticles)
  //        var self = this;

  <div className="list">
    {props.articles.map(a => (
      <Article
        key={a.id}
        title={a.title}
        author={a.author}
        text={a.text}
        image={a.image}
        //                            selected={a.selected}
        //                            select={self.select.bind(self, index)
      />
    ))}
  </div>
);

export default List;
