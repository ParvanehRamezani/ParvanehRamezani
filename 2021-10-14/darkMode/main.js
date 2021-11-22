function mode(mode) {
  if (mode === 'dark') {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}


function toggleTheme() {
  let currentBgColor = document.body.style.backgroundColor;
  if (currentBgColor === "white" || currentBgColor === "") {
    currentBgColor = "black";
    currentBgColor = "white"
  } else {
    currentBgColor = "white";
    currentBgColor = "black";
  }
}