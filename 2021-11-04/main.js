let divElement = document.getElementById("to-do-list")

function sayHello() {
    let spanElement = document.createElement("li")
    spanElement.textContent = "Hello";

    divElement.appendChild(spanElement);
}




