function changeLineColor() {
    // get current info from html file
    const element = document.getElementById("line");
    const color = getComputedStyle(element).getPropertyValue("stroke")
    
    // change color to red if it is blue
    if (color === "rgb(0, 0, 255)") {
        element.style.stroke="red";
    }

    // change color to blue if it is red
    if (color === "rgb(255, 0, 0)") {
        element.style.stroke="blue";
    }
    
}

function changeCircleColor(event) {
    const element = document.getElementById("circle");
    
    // if even was mouseover, change to orange
    if (event === "mouseover") {
        element.style.fill = "orange"
    }

    // if event was mouseout, change back to red
    if (event === "mouseout") {
        element.style.fill = "red"
    }
}

document.getElementById('button').addEventListener('click', changeLineColor);
document.getElementById('circle').addEventListener('mouseover', () => { changeCircleColor('mouseover')});
document.getElementById('circle').addEventListener('mouseout', () => { changeCircleColor('mouseout')});
