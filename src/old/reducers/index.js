

let initialState = {
    counter: 0,
    todos: {id: 5, title: "Hallo Welt"},
    todos: {id: 5, title: "Hallo Mars"}


}

function counter(state = initialState, action) {
    if (action.type == "INCREMENT") {
        return {
            counter: state.counter + 1
        };
    } else {
        return state;
    }
}

export default counter;
