console.log('js paired');

// global vars
let selectedElement = null;
let selectedLinkIn = null;
let selectedLinkOut = null;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));



// allow elements to be spawned in 

document.getElementById('add-note').addEventListener('click', () => {
    new notepad();
    console.log('new note')
})

document.getElementById('add-spreadsheet').addEventListener('click', () => {
    new spreadsheet();
})

document.getElementById('add-display').addEventListener('click', () => {
    new display();
})