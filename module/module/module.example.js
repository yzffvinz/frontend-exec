import addTextToBody from "./div.appender.js";

document.getElementById('addDiv').addEventListener('click', () => {
    addTextToBody(document.getElementById('content').value);
});