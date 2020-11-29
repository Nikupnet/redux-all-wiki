let initialState = null;

function wiki(state = initialState, action) {
    if (action.type === "WIKI_SEARCH") {
        return action.res;
    } else {
        return state;
    }
}
export default wiki;


