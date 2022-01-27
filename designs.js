// Select color input
// Select size input
const form = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");
const colorPicker = document.getElementById("colorPicker");
var canvasHeight = 1;
var canvasWidth = 1;
var color = colorPicker.value;

form.addEventListener("submit", function(linesAndColumns) {
    linesAndColumns.preventDefault();
    canvasHeight = document.getElementById("inputHeight").value;
    canvasWidth = document.getElementById("inputWidth").value;
    makeGrid();
});

colorPicker.addEventListener("change", function(changeThemColors) {
    changeThemColors.preventDefault();
    color = this.value;
    console.log(color);
});
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    canvas.innerHTML = "";
    for (let i = 0; i<canvasHeight; i++) {
        let line = canvas.insertRow(i);
        for (let j = 0; j<canvasWidth; j++) {
            let column = line.insertCell(j);
            column.addEventListener("click", clickCol, false)
        }
    }
}

function clickCol(event) {
    event.preventDefault();
    event.stopPropagation();
    let td = event.target;
    if (td.style.backgroundColor == color) {
        td.style.removeProperty("background-color")
    }
    td.style.backgroundColor = color;
}
