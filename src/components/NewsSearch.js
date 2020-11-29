import React, { Component } from 'react';
import Panel from './Panel';
import news from './news.json';


class NewsSearch extends React.Component {

    constructor() {
        super();
        this.state = {
            search: ''
        };
    }


    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,
            5)});
    }

    render() {

        let filteredNews = news.filter(
            (news) => {
                return news.title.indexOf(this.state.search) !== -1;
            }
        );


        return (
        <Panel title='NewsNewsSearch'>
            <input type="text" 
            value={this.state.search} 
            onChange={this.updateSearch.bind(this)}/>

            { filteredNews.map((news) => {
                return <h1>{news.title}</h1>
            })
            }
        </Panel>
        )
    }
}



export default NewsSearch;
