// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

// Select the table
const pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid();
});

// Create the grid
function makeGrid() {
  // Clear the previous grid
  pixelCanvas.innerHTML = '';

  // Get the input values for height and width
  const height = inputHeight.value;
  const width = inputWidth.value;

  // Create the grid using nested loops
  for (let i = 0; i < height; i++) {
    const row = pixelCanvas.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);

      // Add an event listener to each cell for coloring
      cell.addEventListener('click', function () {
        cell.style.backgroundColor = colorPicker.value;
      });
    }
  }
}