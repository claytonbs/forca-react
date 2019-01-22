import React ,{ Component } from 'react';

import './InputBox.css';

class InputBox extends Component {
    render(){
        
        
        return(
                <input onKeyUp={this.props.onHandleCheckGuess}  id = "guess" type = "text" maxLength="1" autoComplete="off" disabled />
        );
    }
    
}    

export default InputBox;