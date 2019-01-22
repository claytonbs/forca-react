import React ,{ Component } from 'react';

import './Traces.css';


class Traces extends Component {
    
    render(){
        
        return (
            <h2 id = "traces">{ this.props.word }</h2>
            );
    }
    
    
    
}


export default Traces;