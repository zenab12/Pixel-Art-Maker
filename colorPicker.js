
var sizePicker = document.getElementById('sizePicker');
var color = document.getElementById("colorPicker");
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');

 var canvas = document.getElementById("pixelCanvas");
 while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
    }

for (var i = 0 ; i < gridHeight.value; i = i + 1) {
    var tr = document.createElement('tr');
    canvas.appendChild(tr); 
       /*for(j =1; j <= i; j = j +1){
         var td = document.createElement('td');
           tr.appendChild(td);
       }*/
    for (j = 0; j < gridWidth.value; j = j +1){
   var td = document.createElement('td');
    tr.appendChild(td);
    td.style.height = 6;
    td.style.width = 20;
    td.style.backgroundColor = color.value;
    td.onclick = function() {this.style.backgroundColor = color.value }
}
}

}

var submit = document.getElementById('submit');

sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
  });

