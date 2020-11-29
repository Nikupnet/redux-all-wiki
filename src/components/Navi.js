import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";



class Navi extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/newssearch">NewsSearch</Link></li>

                <li><Link to="/wiki">Wiki</Link></li>
                <li><Link to="/todo">ToDo {this.props.todoCount}</Link></li>

                <li><Link to="/click">Klickzähler {this.props.counter}</Link></li>
            </ul>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter,
        todoCount: state.todos.length
    }
} 
let mapDispatchToProps = {}

  let NaviContainer = 
  connect(mapStateToProps, mapDispatchToProps)(Navi);




export default NaviContainer;
