import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PropTypes, { string } from "prop-types";
import { FishType } from "../types.js";

import "./style.css";

import Article from "../Article";

const List = props => (

  <div className="list">
    {
        props.articles.map(a => (
            <Article
                key = {a.id}
                article = {a}
//                title = {a.title}
//                author = {a.author}
//                text = {a.text}
//                image = {a.image}
            />
    ))}
  </div>
);

List.propTypes = {
    articles: PropTypes.arrayOf(FishType)
}

export default List;