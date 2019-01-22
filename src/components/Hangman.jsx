import React, { Component } from 'react';
import './Hangman.css';
import Hang, { Head, Body, LeftArm, RightArm, LeftLeg, RightLeg } from './ForcaImg';

// const Hang = require('./Forca.svg');

class Hangman extends Component {
    
    state = {
	boneco: [
			{name: "<Head />", id: 1, visible: false},
			{name: "<Body />", id: 2, visible: false},
			{name: "<LeftArm />", id: 3, visible: false},
			{name: "<RightArm />", id: 4, visible: false},
			{name: "<RightLeg />", id: 5, visible: false},
			{name: "<Leftleg/>", id: 6, visible: false}
		],
	mistakes: 0

	};
	
	stateReset = this.state;


    handleBoneco = () => {
          // this.setState({boneco: this.state.boneco.map((key)=> key.id <= this.state.mistakes ? {...key, visible: true} : key)});
           //console.log(this.state.mistakes)
      this.setState({mistakes: this.state.mistakes + 1},() => this.setState({boneco: this.state.boneco.map((key)=> key.id <= this.state.mistakes ? {...key, visible: true} : key)}) );
        
    }
    
    resetBoneco = () => {
        
        this.setState(this.stateReset);
    }
    
    
    
    
    render(){
        
     
        
        // var x =  this.state.boneco.map((key)=> key.visible === true ? <React.Fragment> {key.name} </React.Fragment>  : null);
        //console.log(this.state.boneco.map((key)=> key.visible === true ? key.name : null))
        return(
            <div>
            <svg id = "drawning" width="640" height="400">
                <Hang />
                {this.state.boneco[0].visible && <Head />}
                {this.state.boneco[1].visible && <Body />}
                {this.state.boneco[2].visible && <LeftArm />}
                {this.state.boneco[3].visible && <RightArm />}
                {this.state.boneco[4].visible && <RightLeg />}
                {this.state.boneco[5].visible && <LeftLeg />}
                  
                     
            </svg>
         
            </div>
            );
        
    }
    
}


export default Hangman;