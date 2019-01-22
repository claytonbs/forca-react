import React, { Component } from 'react';

class Used extends Component {
    render(){
        
        return(
            <p>Letters alread used: <span> {  this.props.charUsed.join() }  </span></p>
        )
        
    }   


}


export default Used;