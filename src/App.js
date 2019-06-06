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
			if (state.count === 10 ) {
				return null;
			}
			return {count: state.count +1}
		})
	}

	decreaseCount = () => {
		this.setState(state => {
			if (this.state.count === 3 ) {
				return null
			}
			return { count: state.count - 1 }
		})
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
	