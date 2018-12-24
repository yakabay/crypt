import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Grid from './Components/Grid';

class App extends Component {
  state = {
    rows: 4
  }

  render() {
    const { rows } = this.state;

    return (
      <div className="App">
        <Header />
        <Grid rows={rows}/>
      </div>
    );
  }
}

export default App;
