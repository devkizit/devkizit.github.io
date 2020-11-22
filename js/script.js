
let i = 0;
function changeColor() {
    let name = document.getElementById("lanre");
    let colors = ['#8aae4f', '#e17a90', '#311e76', '#8f403d', '#528f3d'];
    name.style.backgroundColor = colors[i];
    i = (i +1) % colors.length;
    
}

setInterval(changeColor, 1000);