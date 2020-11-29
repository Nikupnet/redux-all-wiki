import { combineReducers } from 'redux';

import counter from './counter';
import todos from './todos';
import wiki from './wiki';

let reduce = combineReducers({
    counter: counter,
    todos: todos,
    wiki: wiki
})

/*
function reduce(state, action) {
    if (state === undefined) {
        return {
            counter: counter(undefined, action),
            todos: todos(undefined, action)
        }
    } else {
        return {
            counter: counter(state.counter, action),
            todos: todos(state.todos, action)
        }
    }
}
*/

export default reduce;

