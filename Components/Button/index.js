import React, { Component } from 'react';
import { Button as BButton} from 'react-bootstrap';

const Button = props => (
//    state = {
//        click: false
//    }

//    setButtonClick = () => {
//        this.setState({
//            click: !this.state.click
//        });
//        this.props.setButtonClick(!this.state.click)
//    }
    
    <div>
        <BButton bsStyle="primary" onClick = {props.setUpperRegister} >
            {props.upperRegister? "To lower case" : "To upper case"}
        </BButton>
        {/*<input 
            type="button"  
            value = {props.upperRegister? "To lower case" : "To upper case"}
            onClick = {props.setUpperRegister} 
        />*/}
    </div>
)

export default Button;