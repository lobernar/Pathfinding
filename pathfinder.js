//init variables
var container = document.getElementById("container");
const BOARD_SIZE = 16;
const SQUARE_SIZE = 10;
var cells = [];
var start, end;
var currentKey = null;
var mouse = null;

//Creates the grid of cells
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cells[c] = cell;
    };
}

//Event when clicking on a cell
function onClick(event) {
    for(let i=0; i<(BOARD_SIZE*BOARD_SIZE); ++i) {
      //Add start cell 
      if(cells[i] == event.target && cells[i].contains(event.target) && currentKey == 83 && start == null) {
        cells[i].style.backgroundColor = "blue"
        start = cells[i];
      }
      //Add end cell 
      else if(cells[i] == event.target && cells[i].contains(event.target) && currentKey == 69 && end == null) {
        cells[i].style.backgroundColor = "red"
        end = cells[i];
      }
    
    }
}

//Event when checking if key is pressed
function pressKey(event) {
  currentKey = event.which;
}

//Event resetting currentKey to null
function releaseKey(event) {
  currentKey = null;
}

//Event for building walls
function onHoldMouse(event) {
  for(let i=0; i<(BOARD_SIZE*BOARD_SIZE); ++i) {
    //Add walls
    if(cells[i] == event.target && cells[i].contains(event.target) && currentKey == null) {
      cells[i].style.backgroundColor = "black";
    }
  }
}


makeGrid(BOARD_SIZE, BOARD_SIZE);
document.addEventListener("click", onClick);
document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);
document.addEventListener("mousedown", onHoldMouse);