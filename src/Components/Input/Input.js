import React, {Component} from 'react'

class Input extends Component {
    constructor(){
        super()
        
        const {initialValue} = this.state.initialValue

        this.state = {
            valueInput: initialValue
        }
    }

    render(){
        const {label, type, id} = this.props

        return (
            <div>
                <label>{label}</label>
                <input type={type} value={this.state.value}></input>
            </div>
        )
    }
}

export default  Input