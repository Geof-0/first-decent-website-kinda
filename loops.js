// loops (async)

async function grab_loop(){
    while (true){
        if (selectedElement !== null){
            if (selectedElement.type == 'notepad'){
                selectedElement.notepad.style.left = (mousePos['x'] - selectedElement.offsetX).toString() + 'px';
                selectedElement.notepad.style.top = (mousePos['y'] - selectedElement.offsetY).toString() + 'px';
            } else if(selectedElement.type == 'spreadsheet'){
                selectedElement.spreadsheet.style.left = (mousePos['x'] - selectedElement.offsetX).toString() + 'px';
                selectedElement.spreadsheet.style.top = (mousePos['y'] - selectedElement.offsetY).toString() + 'px';
            } else if (selectedElement.type == 'display'){
                selectedElement.display.style.left = (mousePos['x'] - selectedElement.offsetX).toString() + 'px';
                selectedElement.display.style.top = (mousePos['y'] - selectedElement.offsetY).toString() + 'px';
            }
        }
        await wait(20)
    }
}

async function link_loop(){
    while (true){
        if(selectedLinkIn !== null && selectedLinkOut !== null){
            
        }
    }
}









async function start_loops(){
    grab_loop();
}

start_loops();