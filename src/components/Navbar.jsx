import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    
    
   
    
    render() {
        
        
       
        
        return (
            
                <nav>
                    <button id = "btnStart" onClick = {this.props.onNewGame}>Novo jogo</button>
                </nav>
            
                );
    }
    
    
}

export default Navbar;

