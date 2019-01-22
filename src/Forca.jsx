import React, { Component } from 'react';
import './Forca.css';


import Navbar from './components/Navbar';
import Traces from './components/Traces';
import InputBox from './components/InputBox';
import Used from './components/Used';
import Message from './components/Message';
import Hangman from './components/Hangman';


class Forca extends Component {
    
    
    state = {
		campoValue: "",
		wordsList: ["dog", "beeeer", "apple"],
		wordsList2: [{word: 'cachorro', hint: 'Um animal'},
		            {word: 'cerveja', hint: 'Uma bebida'},
		            {word: 'abacate', hint: 'Uma fruta'}
		    ],
		choosedWord: "",
		choosedWordSplitted: [],
		traces: [],
		charGuessed: "",
		charUsed: [],
		points: 0,
		mistakes: 0,
		message: "Chute uma letra:",
		dica: "Jogo da Forca",
		isRunning: false
	}
    
    
    stateReset = this.state;
    
    
    handleNewGame = () =>{
                 
                 this.child.resetBoneco();
		    	document.getElementById('guess').disabled = false;
			this.setState(this.stateReset, ()=>{
    			let tempTraces = [];
    			let randomNumber = Math.floor(Math.random() * 3);
    			this.setState({choosedWord: this.state.wordsList2[randomNumber].word, dica: this.state.wordsList2[randomNumber].hint, isRunning: true}, () =>{
    
    				this.setState({choosedWordSplitted: this.state.choosedWord.split("")}, () => {
    
    					this.state.choosedWordSplitted.forEach((key) => {
    						
    						tempTraces.push ("_ ");		
    
    					});
    					this.setState({traces: tempTraces});
    					
    				});
    			});
			});
			
		}
		
		
	handleCheckGuess = () => {
	    this.setState({charGuessed: document.getElementById('guess').value.toLowerCase()}, ()=>{
			document.getElementById('guess').value = "";
			
			if (this.checkUsed()){
				let computedPoints = 0;
				let newTraces = this.state.traces;

				this.state.choosedWordSplitted.forEach((key,index)=>{
				
					if (this.state.charGuessed === key) {
						computedPoints++;
						
						newTraces[index] = this.state.charGuessed + " ";


						//let newTraces = this.state.traces.map((keyMap,indexMap)=>{return index == indexMap ? this.state.charGuessed : keyMap;})

						
				
						this.setState({points: this.state.points + computedPoints, message: "Você acertou!", traces: newTraces }, () => {this.checkStatus()});
					}		
			
				})


				// Caso não tenha havido acertos adiciona ponto negativo e chama a função de checar se o usuário perdeu
				if (computedPoints === 0 ){
					this.setState({mistakes: this.state.mistakes + 1, message: "você errou!"}, ()=> {this.checkStatus()});
				    this.child.handleBoneco();
				    
				}
			}
	
	
	    });
	}
	
	
	checkStatus = () => {
	    
	    
	    if (this.state.points >= this.state.choosedWordSplitted.length){
				this.setState({message: "Você venceu!"});
				   //document.getElementById('head').style.visibility = "hidden";
				document.getElementById('guess').disabled = true;
				   
		        
			}

			if (this.state.mistakes >= 6){
				this.setState({message: "você perdeu!"});
				document.getElementById('guess').disabled = true;
				 
			}
	};
	
		

	    
	    
	
    
    
		checkUsed = () => {
			for (var temp = 0; temp< this.state.charUsed.length; temp++ ){
				if (this.state.charUsed[temp] === this.state.charGuessed) {
				this.setState({message: "Essa letra já foi utilizada."})

				return false;
				}
				

			}

			this.setState({charUsed: [...this.state.charUsed, this.state.charGuessed]})
			// this.state.charUsed.push(this.state.charGuessed);
			console.log(this.state.charUsed);
			return true;	
		}
    
    
    render(){
        
          
         
        console.log(this.state.points, this.state.mistakes);
       
        
        
        return (
            <div>
                <Navbar onNewGame={this.handleNewGame} />
                <h1>{this.state.dica}</h1>
                <Hangman ref={ref => this.child = ref} />
                <Traces word= {this.state.traces}/>
                {this.state.isRunning &&<Message message = {this.state.message}/>}
                 <InputBox onHandleCheckGuess = {this.handleCheckGuess} />
                {this.state.isRunning && <Used charUsed = {this.state.charUsed} />}
                
            </div>
            );
    
     
        
    }
    
    
    
}


export default Forca;


