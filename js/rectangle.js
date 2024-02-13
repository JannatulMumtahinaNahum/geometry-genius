function calculateRectangleArea(){
// get length of the rectangle
const lengthInput = document.getElementById('rectangle-length');
const lengthText = lengthInput.value ;
const length = parseFloat(lengthText);
console.log(length);

// get width of the recteangle
const widthInput = document.getElementById('rectangle-width');
const widthText = widthInput.value ;
const width = parseFloat(widthText)
console.log(width);

// calculate rectangle area
 const area = length * width
 console.log(area);
  // display rectangle area
  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText = area;
}