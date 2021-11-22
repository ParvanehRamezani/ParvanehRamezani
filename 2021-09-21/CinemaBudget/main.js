let ticketPrice = 8;
let friends = 4;
let popcornPrice = 10;
let totalBudget = 30;

let totalPrice = friends * (ticketPrice + popcornPrice);
let canGoToCinema = totalBudget >= totalPrice;

console.log(canGoToCinema);