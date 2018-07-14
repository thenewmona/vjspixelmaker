// Select color input
let color = document.getElementById('#colorPicker');
let table = document.getElementById('#pixelCanvas');
let sizePicker = document.getElementById('sizePicker');

// Select size input
height = document.getElementById('inputHeight');
width = document.getElementById('inputWidth');


sizePicker.addEventListener('click', (e) => {
  e.preventDefault(); //this makes it so the grid will stay, instead of disappear
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  makeGrid(height, width);



  // console.log(e + 'test');//passed
  // console.log(height.value, width.value);//passed 
  //console.log(color.val); //will not out pass 
});

// Your code goes here!
//make a grid
// create table for loops

function makeGrid(height, width) {

  //https://www.w3schools.com/jsref/met_table_insertrow.asp
  let row = (table.insertRow());
  console.log(height, width);
}