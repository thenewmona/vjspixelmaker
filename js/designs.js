// Select color input
const color = document.getElementById('#colorPicker');

// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
function clearOldGrid() {
  //clear the grid
  canvas.innerHTML = '';
}

function makeGrid() {
  let tr, td;

  // Your code goes here!

  // create table for loops 

  for (let i = 0; i < height.val; i++) {
    tr = document.createElement('tr');
    canvas.appendChild(tr);
    for (let j = 0; j < width.value; j++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

function changeCellColor() {

  canvas.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.nedeName === 'TD') {
      e.target.style.bacgroundColor = color.value;
    }
  })
}
sizePicker.addEventListener('submit', function (e) {
  e.preventDefault();
  clearOldGrid();
  makeGrid();
  changeCellColor();
})