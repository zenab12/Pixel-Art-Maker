let sizePicker = document.getElementById('sizePicker');
let color = document.getElementById("colorPicker");
let gridHeight = document.getElementById('inputHeight');
let gridWidth = document.getElementById('inputWidth');
let canvas = document.getElementById("pixelCanvas");
let Reset = document.querySelector('#Reset')
let Pallette = document.querySelector('.pallette');
let name = document.querySelector('.pallette h2');
let PalletteName = prompt('Enter Your Pallette Name : ');

name.innerHTML = PalletteName
name.style.display = 'block';

function makeGrid() {

    for (let i = 0; i < parseInt(gridHeight.value); i++) {
        let tr = document.createElement('tr');
        canvas.appendChild(tr);

        for (j = 0; j < parseInt(gridWidth.value); j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.style.height = 6;
            td.style.width = 20;
            td.style.backgroundColor = color.value;
            td.onclick = function() { this.style.backgroundColor = color.value }
        }

    }

}

function ResetTheSize() {
    //Reset The size 
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    gridHeight.value = 0
    gridWidth.value = 0
}

Reset.addEventListener('click', ResetTheSize);

sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});