import React, { Component } from "react";

class OutputWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<textarea 
                value={this.props.output} 
                ></textarea>
        );
    }
}

export default OutputWindow;