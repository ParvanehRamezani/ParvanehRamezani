let secNumber = 36
let guessNumber = 
function guess() {
   guess >= 1 && guess <= 100;
    if (guessNumber === secNumber) {
        console.log("You won! The number is" + secNumber);
    }
    
    if (guessNumber > secNumber) {
        console.log("you guess too higher");
    }
    if (guessNumber < secNumber) {
        console.log("you guess too lower");
    }
    
}
guess();