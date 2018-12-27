import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Grid from './Components/Grid'

class App extends Component {
  state = {
    rowsColsCount: 4
  }

  handleClickOnCol = id => console.log(id)

  render() {
    const { rowsColsCount } = this.state

    return (
      <div className="App">
        <Header />
        <Grid rowsColsCount={rowsColsCount} onColClick={this.handleClickOnCol}/>
      </div>
    )
  }
}

export default App
