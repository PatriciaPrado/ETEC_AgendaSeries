import React, {Component} from 'react';

import PropTypes from 'prop-types';
// npm install --save prop-types

class Input extends Component {
    constructor(props){
        super(props)
        
        const {initialValue} = this.props

        this.state = {
            value: initialValue
        }
    }

    render(){
        const {label, type, id} = this.props

        return (
            <div>
                <label>{label}</label>
                <input id={id} type={type} value={this.state.value}></input>
            </div>
        )
    }
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
}

Input.defaultProps = {
    type: "text",
    initialValue: ""
}

export default  Input