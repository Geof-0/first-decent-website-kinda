// elements for main.js to use (or other files)

const notepadPrefab = document.getElementById("notepad-prefab"); let notepadID = 1;
const spreadsheetPrefab = document.getElementById("spreadsheet-prefab"); let spreadsheetID = 1;

// other sub-prefabs

const spreadsheetCellPrefab = document.getElementById("spreadsheet-cell-prefab")

// notepad parent

elements = [] // really just notepads
spreadsheets = []

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
            this.isSelected = true; selectedElement = this; this.notepad.style.zIndex = 4;

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
                    element.notepad.style.zIndex = 3;

                    element.notepad.style.backgroundColor = 'rgba(230, 230, 0, 1)'
                    element.notepad.querySelector('.notepad-title').style.backgroundColor = 'rgba(235, 235, 0, 1)'
                }
            });
        })

        this.notepad.addEventListener('mouseup', () => {
            this.isSelected = false;selectedElement = null;
        })

        // detect when deleted
        this.notepad.querySelector('.delete-element').addEventListener('click', () => {
            this.notepad.remove()
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

class spreadsheet{
    constructor(){
        this.type= 'spreadsheet';
        this.cells = {} // eg: 1 (id) = element
        this.cellID = 1;

        this.spreadsheet = spreadsheetPrefab.cloneNode(true);
        this.spreadsheet.hidden = false;
        this.spreadsheet.id = `spreadsheet(${spreadsheetID})`; this.id = spreadsheetID; spreadsheetID += 1;

        // event listeners for grabbing 
        this.offsetX = 0; this.offsetY = 0;

        this.spreadsheet.addEventListener('mousedown', () => {
            selectedElement = this; this.spreadsheet.style.zIndex = 2;
            calculate_offset(this.spreadsheet, this);

            spreadsheets.forEach(spreadsheet => {
                if (spreadsheet !== this){
                    spreadsheet.spreadsheet.style.zIndex = 1;
                    spreadsheet.spreadsheet.style.backgroundColor = 'rgb(245,245,245)'
                }
            })
            this.spreadsheet.style.backgroundColor = 'rgb(255,255,255)'
        })

        this.spreadsheet.addEventListener('mouseup', () => {
            selectedElement = null;
        })

        // event listeners for settings

        this.spreadsheet.querySelector('.delete-element').addEventListener('click', () => {
            this.spreadsheet.remove()
        })

        this.spreadsheet.querySelector('.add-cell').addEventListener('click', () => {this.new_cell()})

        document.body.appendChild(this.spreadsheet);
        spreadsheets.push(this);


        // accomodate for setting being different
        const settingsview = this.spreadsheet.querySelector(".element-settings-view")
        settingsview.style.bottom = '-' + window.getComputedStyle(settingsview).height;

        this.new_cell()
    }

    new_cell(){
        // initiate new cell
        const cell = spreadsheetCellPrefab.cloneNode(true);
        cell.hidden = false;
        cell.id = `spreadsheet${this.id} => cell${this.cellID}`
        cell.classList.add('1')
        cell.textContent = this.cellID
        this.cells[this.cellID] = cell;
        this.cellID += 1
        console.log(cell)
        this.spreadsheet.querySelector(".spreadsheet-spreadsheet").appendChild(cell);
    }
}





















































// global event listener functions

function calculate_offset(element, object){
    object.offsetX = mousePos['x'] - parseInt(getComputedStyle(element).left);
    object.offsetY = mousePos['y'] - parseInt(getComputedStyle(element).top);
}

function add_settings_properties(element, object){
    // element should be the settings element
    element.addEventListener('hover')
}