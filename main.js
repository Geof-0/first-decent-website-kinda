console.log('js paired');

// global vars
let selectedElement = null;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));




// allow elements to be spawned in 

document.getElementById('add-note').addEventListener('click', () => {
    new notepad();
})


