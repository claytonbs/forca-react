import React from 'react';
import './Navbar.css';

const Navbar = props => {
        
            return (
                
                    <nav>  
                        <button id = "btnStart" onClick = {props.onNewGame}>Novo jogo</button>
                    </nav>
                
                    );
        };
    
    


export default Navbar;

