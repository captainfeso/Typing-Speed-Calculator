import React, { Component } from 'react';
import './App.css';
import TestContainer from '../TestContainer/TestContainer'
import { typingTestData } from '../../data/source';
import randomElementSelector from '../../helper/randomSelector'
import { testDetailsCalculator } from '../../helper/testDetailsCalculator';

const initialState = {
	timerStarted: false,
	timerValue:30,
	selectedParagraph: randomElementSelector(typingTestData),
	detailsContainer: {
		words:0,
		characters:0,
		mistakes: 0
	}
}

class App extends Component {
	constructor () {
		super();

		this.state = initialState;
	}
	
	handleOnType = (inputValue)=>{
		console.log(`From the App.js ${inputValue}`);
		if(!this.state.timerStarted) this.startTimer();
		
		this.setState({detailsContainer:testDetailsCalculator(this.state.selectedParagraph, inputValue)});
	}

	startTimer=()=>{
		this.setState({timerStarted: true});
		const timer=setInterval(()=>{
			if(this.state.timerValue>0){
				this.setState({timerValue: this.state.timerValue -1})
			}else{
				clearInterval(timer);
			}
		},1000)
	}

	triggerTryAgain =()=>{
		this.setState(initialState)
	}

	render() {
		return (
			<div className="app-container">
				<h1 className="main-heading">Speedy Type</h1>
				<div className="test-container-main">
					<TestContainer 
					handleOnType={this.handleOnType}
					timerStarted = {this.state.timerStarted}
					timerValue={this.state.timerValue}
					triggerTryAgain={this.triggerTryAgain}
					selectedParagraph={this.state.selectedParagraph}
					words = {this.state.detailsContainer.words}
					characters = {this.state.detailsContainer.characters}
					mistakes = {this.state.detailsContainer.mistakes}
					/>
				</div>
			</div>
		)
	}
}

export default App;
