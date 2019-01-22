import React ,{ Component } from 'react';

import './InputBox.css';

class Message extends Component {
    render(){
        
        
        return(
                <h3>{this.props.message}</h3>
        );
    }
    
}    

export default Message;