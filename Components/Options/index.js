import React, { Component } from 'react';
import { Button as BButton} from 'react-bootstrap';

import SearchBox from '../SearchBox'
import Button from '../Button'

class Options extends Component {
    state = {
        showOptions: false
    };

    toggleShowOptions = () => {
        this.setState({ showOptions: !this.state.showOptions });
    }

    getOptions(visible) {
        if(visible) return <div>
                <SearchBox 
                    setSearchString = {this.props.setSearchString} 
                    searchString = {this.props.searchString} 
                />
                <Button 
                    setUpperRegister = {this.props.setUpperRegister} 
                    upperRegister = {this.props.upperRegister} 
                />
            </div>
        return <div></div>
    }

    render() {

        return(
            <div>
                <BButton onClick = {this.toggleShowOptions} bsStyle="success" bsSize="sm">
                    {this.state.showOptions ? "hide Options" : "show Options"}
                </BButton>
                {this.getOptions(this.state.showOptions)}
            </div>
        )

    }
}

export default Options