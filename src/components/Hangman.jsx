import React, { Component } from 'react';
import './Hangman.css';
import Hang, { Head, Body, LeftArm, RightArm, LeftLeg, RightLeg } from './ForcaImg';

// const Hang = require('./Forca.svg');

class Hangman extends Component {
    
    
        state = {
	        boneco: [
    			{name: <Head key='1' />, id: 1, visible: false},
    			{name: <Body key='2' />, id: 2, visible: false},
    			{name: <LeftArm key='3' />, id: 3, visible: false},
    			{name: <RightArm key='4' />, id: 4, visible: false},
    			{name: <RightLeg key='5' />, id: 5, visible: false},
    			{name: <LeftLeg key='6'/>, id: 6, visible: false}
	    	],

    	};
        
    
	stateReset = this.state;

    handleBoneco = () => {
         this.setState({boneco: this.state.boneco.map((key)=> key.id <= this.props.mistakes ? {...key, visible: true} : key)});
    }
    
    resetBoneco = () => {
        this.setState(this.stateReset);
    }
    
    render(){
        
        return(
            <React.Fragment>
            <svg id = "drawning" width="640" height="400">
                <Hang />
                {this.state.boneco.map((key)=> key.visible === true ? key.name : null)}
            </svg>
         
            </React.Fragment>
            );
        
    }
    
}


export default Hangman;



 //{this.state.boneco[0].visible && <Head />}
                //{this.state.boneco[1].visible && <Body />}
                //{this.state.boneco[2].visible && <LeftArm />}
                //{this.state.boneco[3].visible && <RightArm />}
                //{this.state.boneco[4].visible && <RightLeg />}
                //{this.state.boneco[5].visible && <LeftLeg />}