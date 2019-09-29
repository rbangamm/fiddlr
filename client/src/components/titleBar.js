import React, { Component } from "react";
import logo from "./res/logo.png";

class TitleBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let frameHeight = window.innerHeight;
        return (
            <div>
            <img style={{float:"left"}} src={logo}></img>
            </div>
        );
    }
}

export default TitleBar;