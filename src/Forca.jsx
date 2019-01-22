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
		            {word: 'abacate', hint: 'Uma fruta'},
		            {word: 'pindamonhangaba', hint: 'Uma cidade'},
		            {word: 'wando', hint: 'Um cantor'}
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
	};
  
  
	
    
    stateReset = this.state;
    
    
    handleNewGame = () =>{
                 
                 this.child.resetBoneco();
		    	
			this.setState(this.stateReset, ()=>{
    			let tempTraces = [];
    			let randomNumber = Math.floor(Math.random() * this.state.wordsList2.length);
    			this.setState({choosedWord: this.state.wordsList2[randomNumber].word, dica: this.state.wordsList2[randomNumber].hint, isRunning: true}, () =>{
    
    				this.setState({choosedWordSplitted: this.state.choosedWord.split("")}, () => {
    
    					this.state.choosedWordSplitted.forEach((key) => {
    						
    						tempTraces.push ("_ ");		
    
    					});
    					this.setState({traces: tempTraces});
    					document.getElementById('guess').disabled = false;
    				});
    			});
			});
			
		}
		
		
	handleCheckGuess = () => {
	    let char = document.getElementById('guess').value;
	    this.setState({charGuessed: char.toLowerCase().charAt(char.length-1)}, ()=>{
			document.getElementById('guess').value = null;
		
			if (this.checkUsed()){
				let computedPoints = 0;
				let newTraces = this.state.traces;

				this.state.choosedWordSplitted.forEach((key,index)=>{
				
					if (this.state.charGuessed === key) {
						computedPoints++;
						
						newTraces[index] = this.state.charGuessed + " ";

						this.setState({points: this.state.points + computedPoints, message: "Você acertou!", traces: newTraces }, () => {this.checkStatus()});
					}		
			
				})


				// Caso não tenha havido acertos adiciona ponto negativo e chama a função de checar se o usuário perdeu
				if (computedPoints === 0 ){
					this.setState({mistakes: this.state.mistakes + 1, message: "você errou!"}, ()=> 
					{
						this.checkStatus()
						this.child.handleBoneco();
					});
				   // this.child.handleBoneco();
				    
				}
			}
	
	
	    });
	}
	
	// checa se o jogador ganhou ou perder
	checkStatus = () => {
	    
	    
	    if (this.state.points >= this.state.choosedWordSplitted.length){
				this.setState({message: "Você venceu!"});
				document.getElementById('guess').disabled = true;
		}

		if (this.state.mistakes >= 6){
			this.setState({message: "você perdeu!"});
			document.getElementById('guess').disabled = true;
		}
	};
	
		

	    
	    
	
    
    // checa se uma letra já foi usada
		checkUsed = () => {
			for (var temp = 0; temp< this.state.charUsed.length; temp++ ){
				if (this.state.charUsed[temp] === this.state.charGuessed) {
					this.setState({message: "Essa letra já foi utilizada."});
					return false;
				}
			
			}

			this.setState({charUsed: [...this.state.charUsed, this.state.charGuessed]});
			return true;	
		}
    
    
    render(){
        
        
        return (
            <React.Fragment>
                <Navbar onNewGame={this.handleNewGame} />
                <h1>{this.state.dica}</h1>
                <Hangman mistakes={this.state.mistakes} ref={ref => this.child = ref} />
                <Traces word= {this.state.traces}/>
                {this.state.isRunning && <Message message = {this.state.message}/>}
                {this.state.isRunning && <InputBox onHandleCheckGuess = {this.handleCheckGuess} />}
                {this.state.isRunning && <Used charUsed = {this.state.charUsed} />}
            </React.Fragment>
        );
    
    }

	
}


export default Forca;


