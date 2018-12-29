import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Grid from './Components/Grid'

class App extends Component {
  state = {
    count: 4
  }

  handleClickOnCell = id => console.log(id)

  render() {
    const { count } = this.state

    return (
      <div className="App">
        <Header />
        <Grid count={count} onCellClick={this.handleClickOnCell} />
      </div>
    )
  }
}

export default App
