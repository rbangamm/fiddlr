import React, { Component } from "react";

class OutputWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let frameHeight = window.innerHeight;
        return (<textarea
                style={{
                    height: frameHeight,
                    width: "100%",
                    margin:0,
                    padding:0,
                    border: "none"
                }} 
                value={this.props.output} 
                ></textarea>
        );
    }
}

export default OutputWindow;