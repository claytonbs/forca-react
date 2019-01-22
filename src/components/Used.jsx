import React, { Component } from 'react';

class Used extends Component {
    render(){
        
        return(
            <p>Letras já usadas: <span> {  this.props.charUsed.join() }  </span></p>
        )
        
    }   


}


export default Used;