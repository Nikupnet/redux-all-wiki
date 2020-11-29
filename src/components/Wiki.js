import React, { Component } from 'react';
import Panel from "./Panel";
import { Redirect } from 'react-router';

class Wiki extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            searchButtonClicked: false
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onTextChange(event) {
        this.setState({
            searchText: event.target.value
        })
    }

    onSearchSubmit() {
        this.setState({
            searchButtonClicked: true
        })
    }


    render() {
        return (

            <Panel title="Wikipedia">
                                {(this.state.searchButtonClicked == true ? (
                    <Redirect to={"/wiki-results/" + this.state.searchText} />
                ): null)}
                <input 
                    type="text" 
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                />
                <button onClick={this.onSearchSubmit}>
                    Wikipedia durchsuchen
                </button>
            </Panel>

        )
    }
}


export default Wiki;