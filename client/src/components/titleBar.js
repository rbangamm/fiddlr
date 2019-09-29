import React, { Component } from "react";
import logo from "./res/logo.svg";

class TitleBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let frameHeight = window.innerHeight;
        return (<img src={logo}></img>
        );
    }
}

export default TitleBar;