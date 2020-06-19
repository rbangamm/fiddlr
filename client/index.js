import * as monaco from 'monaco-editor';
import * as io from './io.js';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css') {
			return './css.worker.bundle.js';
		}
		if (label === 'html') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
}

monaco.editor.defineTheme('defaultTheme', {
	base: 'vs-dark',
	inherit: true,
	rules: [{ background: '0F0F0F' }],
    colors: {
        'editor.foreground': '#ffffff',
        'editor.background': '#000000',
        'editorCursor.foreground': '#8B0000',
        'editor.lineHighlightBackground': '#0000FF20',
        'editorLineNumber.foreground': '#008800',
        'editor.selectionBackground': '#88000030',
		'editor.inactiveSelectionBackground': '#88000015'
    }
})

monaco.editor.setTheme('defaultTheme')

self.monacoEditor = monaco.editor.create(document.getElementById('container'), {
	value: [
		'def x():',
		'\tprint("Hello world!");',
		''
	].join('\n'),
	language: 'python'
});

// resize the editor and its container
window.onresize = function() {
	let container = document.getElementById('container')
	let output = document.getElementById('output')
	container.style.width = window.innerWidth / 2
	container.style.margin = 0
	container.style.height = window.innerHeight
	output.style.width = window.innerWidth - window.innerWidth / 2
	self.monacoEditor.layout()
}

let readPython = io.pyin
let writePython = io.pyout

function runPython() {
	let prog = self.monacoEditor.getModel().getValue();
	console.log("prog: " + prog) 
	let pre = document.getElementById("outputText"); 
	pre.innerHTML = ''; 
	Sk.pre = "output";
	Sk.configure({output:writePython, read:readPython});
	// configure turtle graphics later 
	//(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
	let myPromise = Sk.misceval.asyncToPromise(function() {
		return Sk.importMainWithBody("<stdin>", false, prog, true);
	});
	myPromise.then(function(mod) {
		console.log('success');
	},
		function(err) {
		console.log(err.toString());
	});
}

document.getElementById("run").onclick = function() {runPython();}