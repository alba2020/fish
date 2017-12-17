import React, { Component } from "react";
import PropTypes, { string } from "prop-types";

const SearchBox = props => (
//    state = {
//        search: ""
//        
//    };

//    setSearch = event => {
////        this.setState({
////            search: event.target.value
////        });
//        this.props.setSearchString(event.target.value);
//    };

    <div>
        <input
            type = "text"
            value = {props.searchString}
            placeholder = "Enter your search..."
            onChange = {props.setSearchString}
        />
    </div>
);

SearchBox.propTypes = {
    setSearchStirng: PropTypes.func,
    searchString: PropTypes.string
};

export default SearchBox;
