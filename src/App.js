import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Grid from './Components/Grid'

class App extends Component {
	state = {
		count: 5
	}
	
	increaseCount = () => {
		this.setState(state => {
			if (state >= 10 ) {
				return;
			}
			return {count: ++state.count}
		})
	}

	decreaseCount = () => {
		if (this.state <= 3 ) {
			return null;
		}
		this.setState(state => ({
			count: --state.count
		}))
	}
	
	render() {
		const { count } = this.state
		return (
			<div className="App">
			<Header
				count={count}
				increaseCount={this.increaseCount}
				decreaseCount={this.decreaseCount}
			/>
			<Grid count={count} />
			</div>
		)
	}
}
	
export default App
	