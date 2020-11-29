import React, { Component } from 'react';
import { incrementCounter } from '../actions/index';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.title}</li>
                    )
                })}
            </ul>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

let mapDispatchToProps = {}

let TodoListContainer = 
    connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
