import React, { Component } from 'react';
import Panel from "./Panel";

class TodoAdd extends Component {

    constructor(props) {
        super(props);

        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoInputChange = this.onTodoInputChange.bind(this);

        this.state = {
            newTodo: "Test123"
        }
    }

    onTodoAdd() {
        this.props.onAdd(this.state.newTodo);
    }

    onTodoInputChange(event) {
        this.setState({
            newTodo: event.target.value
        })
    }

    render() {
        return (
            <Panel title="Todo hinzufügen">
                <input 
                    type="text" 
                    onChange={this.onTodoInputChange}
                    value={this.state.newTodo}
                />
                {(this.state.newTodo != "" ? (
                    <button 
                        onClick={this.onTodoAdd}>
                        Todo hinzufügen ({this.state.newTodo.length})
                    </button>
                ) : null)}
            </Panel>
        )
    }
}

TodoAdd.propTypes = {
    onAdd: React.PropTypes.func.isRequired
}

export default TodoAdd;