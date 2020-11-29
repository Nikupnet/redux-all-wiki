import React, { Component } from 'react';
import "./Panel.css";

class Panel extends Component {
    render() {
        return (
            <div className="Panel">
                <h4 className="Panel-title">
                    {this.props.title}
                </h4>
                <div className="Panel-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Panel.propTypes = {
    /** Der Titel vom Panel */
    title: React.PropTypes.string.isRequired
}

export default Panel;