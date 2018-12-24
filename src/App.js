import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Grid from './Components/Grid'

class App extends Component {
  state = {
    rowsCount: 4
  }

  render() {
    const { rowsCount } = this.state

    return (
      <div className="App">
        <Header />
        <Grid rowsCount={rowsCount}/>
      </div>
    )
  }
}

export default App
