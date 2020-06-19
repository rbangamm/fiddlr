export function pyout(text) { 
    let pre = document.getElementById("outputText");
    pre.innerHTML = pre.innerHTML + text
}

export function pyin(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}