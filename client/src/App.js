import React, { Component } from "react";
import MonacoEditor from 'react-monaco-editor';
import { render } from 'react-dom';
import OutputWindow from './components/outputWindow';
import TitleBar from './components/titleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'var x = 5;',
            output: 'output'
        }
    }
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }
    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }
    render() {
        const code = this.state.code;
        const options = {
        selectOnLineNumbers: true
        };
        // Get the viewport height
        let frameHeight = window.innerHeight;
        return (
            <div 
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch"
              }}>
            <TitleBar></TitleBar>
            <span
                style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
            <MonacoEditor
            ref="monaco"
            width="100%"
            height={frameHeight}
            language="typescript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange.bind(this)}
            editorDidMount={this.editorDidMount.bind(this)}
            />
            <OutputWindow
            output={this.state.output}
            ></OutputWindow>
            </span>
            </div>
        );
    }
}

render(
  <App />,
  document.getElementById('root')
);
export default App;
