import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

export function incrementCounter() {
    return {type: "INCREMENT"};
}


export function addTodo(title) {
    return {type: "ADD_TODO", title: title};
}

export function wikiSearch(keyword) {
    return function(dispatch) {
        let url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&format=json&callback=JSONP_CALLBACK";
        superagent
            .get(url)
            .use(jsonp({
                callbackName: 'JSONP_CALLBACK'
            }))
            .end((err, res) => {
        dispatch ({type: "WIKI_SEARCH", keyword:keyword, res: res })
    })
    
        
}
}