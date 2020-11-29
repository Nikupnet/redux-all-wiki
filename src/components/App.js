import React, { Component } from 'react';
import { incrementCounter } from '../actions/index';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Klickzähler: {this.props.value}</h1>
        <button onClick={this.props.onIncrement}>Klick</button>
      </div>
    );
  }
}

let mapStateToProps = function(state) {
  return {
    value: state.counter
  }
}

let mapDispatchToProps = {
  onIncrement: incrementCounter
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
