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

let monacoEditor = monaco.editor.create(document.getElementById('container'), {
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
	container.style.width = window.innerWidth
	monacoEditor.layout()
}