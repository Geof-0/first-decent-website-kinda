// elements for main.js to use (or other files)


const notepadPrefab = document.getElementById("notepad-prefab"); let notepadID = 1;

// notepad parent

elements = []

class notepad{
    constructor(){
        this.type = 'notepad'

        this.notepad = notepadPrefab.cloneNode(true);
        this.notepad.hidden = false;
        this.notepad.id = `notepad(${notepadID})`; notepadID += 1;
        this.isSelected = false;

        // event listeners for grabbing

        this.offsetX = 0; this.offsetY = 0;

        this.notepad.addEventListener('mousedown', () => {
            this.isSelected = true; selectedElement = this; this.notepad.style.zIndex = 2;

            // change this.offset(dir)
            this.offsetX = mousePos['x'] - parseInt(getComputedStyle(this.notepad).left);
            this.offsetY = mousePos['y'] - parseInt(getComputedStyle(this.notepad).top);
            console.log(this.offsetX, this.offsetY)
            console.log(mousePos)
            console.log(this.notepad.style.top)

            //change styling
            this.notepad.style.backgroundColor = 'rgba(240, 240, 0, 1)'
            this.notepad.querySelector('.notepad-title').style.backgroundColor = 'rgba(245, 245, 0, 1)'

            // change zIndex
            elements.forEach(element=> 
                {
                if (element !== this){
                    element.notepad.style.zIndex = 1;

                    element.notepad.style.backgroundColor = 'rgba(230, 230, 0, 1)'
                    element.notepad.querySelector('.notepad-title').style.backgroundColor = 'rgba(235, 235, 0, 1)'
                }
            });
        })

        this.notepad.addEventListener('mouseup', () => {
            this.isSelected = false;selectedElement = null;
        })
        

        /*
        -- old code

        this.notepad.addEventListener('mousemove', () => {
            if (this.isSelected){
                this.notepad.style.left = (mousePos['x'] - this.offsetX).toString() + 'px';
                this.notepad.style.top = (mousePos['y'] - this.offsetY).toString() + 'px';
                console.log('dragging');
            }
        })
        */

        document.body.appendChild(this.notepad);
        elements.push(this);
    }
}

