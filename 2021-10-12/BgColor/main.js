/*function colorRed() {

    document.body.style.backgroundColor = "red";

}
function colorGreen() {

    document.body.style.backgroundColor = "green";

}
function colorBlue() {

    document.body.style.backgroundColor = "blue";
}*/

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    
}


//Task 1 - Bonus

function darkColor() {

    let color = document.body.style.backgroundColor;
    if (color === "red") {

        document.body.style.backgroundColor = "darkRed";
    }
    if (color === "green") {

        document.body.style.backgroundColor = "darkGreen";

    }
    if (color === "blue") {

        document.body.style.backgroundColor = "darkBlue";
    }

}
