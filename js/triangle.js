// objective: get base,height pf a triangle.calculate the area by using the provided formula. and then display the area.
// * step1: get base value of the triangle
// * step2:Added an id in the base input
// *step3: use getElementById to access the input filed
// * step4: get value from the input filed(value os string now)
// *step5:convert the value to a number . use parseFloat

function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}