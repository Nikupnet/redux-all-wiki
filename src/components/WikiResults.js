import React, { Component } from 'react';
import { connect } from 'react-redux';

import Panel from "./Panel";
import { wikiSearch } from './../actions/index';


class WikiResults extends Component {

    componentDidMount() {
        this.props.onPerformSearch(this.props.match.params.search);
    }

    render() {
        if (this.props.response) {
            console.log(this.props.response.body.query.search);
        }
        // <div>WikipediaResults: {this.props.match.params.search}</div>
        return (
            <div>
                {(this.props.response?(
                    <div>
                        {this.props.response.body.query.search.map((item) => {
                            return (
                                <div>
                                    <Panel title={item.title}>
                                        <div dangerouslySetInnerHTML={{__html: item.snippet}}></div>
                                    </Panel>
                                    <br />
                                </div>
                            )
                        })}
                    </div>
                ):null)}
            </div>
        )
    }

}




let mapStateToProps = (state) => {
    return {
        response: state.wiki

    }
}

let mapDispatchToProps = {
    onPerformSearch: wikiSearch
}


let WikiResultsContainer =
connect(mapStateToProps, mapDispatchToProps)(WikiResults)





export default WikiResultsContainer;