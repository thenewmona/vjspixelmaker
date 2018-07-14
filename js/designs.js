// Select color input
let color = document.querySelector('#colorPicker');

// Select size input

let height = document.querySelector('#inputHeight');
let width = document.querySelector('inputWidth');
let sizePicker = document.querySelector('sizePicker');
let canvas = document.querySelector('pixelCanvas');

//this makes it so the grid will stay, instead of disappear
//https://www.w3schools.com/jsref/event_preventdefault.asp
function makeGrid() {
  //clear the old grid
  canvas.innerHTML = '';
  let tr, td;

  // Your code goes here!
  //make a grid

  // create table with for loops

  for (let i = 0; i < height.value; i++) {
    tr = document.createElement('tr');
    canvas.appendChild(tr);

    for (let j = 0; j < width.value; j++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

canvas.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.nodeName === 'TD') {
    e.target.style.backgroundColor = color.value;
  }
})
sizePicker.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
})