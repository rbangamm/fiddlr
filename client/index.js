import * as monaco from 'monaco-editor';

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

let monacoEditor = monaco.editor.create(document.getElementById('container'), {
	value: [
		'def x():',
		'\tprint("Hello world!");',
		''
	].join('\n'),
	language: 'python'
});


window.onresize = function() {
	let container = document.getElementById('container')
	container.style.width = window.innerWidth
	console.log(window.innerWidth)
	monacoEditor.layout()
	/*
	for (let i = 0; i < container.children.length; i++) {
		console.log(container.children[i])
		container.children[i].style.width = window.innerWidth
	}
	*/
}