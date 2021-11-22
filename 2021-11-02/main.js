function buttonClicked() {
    let nameElement = document.getElementById("name");
    let divElement = document.getElementById("namePrinted");

     
    let personName = nameElement.value;
if (nameElement.value === "") {
    divElement.textContent = "Please enter your name";
    divElement.style.color = "red";
} else {
    divElement.textContent = "Hello" + " " + personName;
    divElement.style.color = "black";
}
    


}