let milkPrice = 2;
let cheesePrice = 4;
let breadPrice = 2;
let butterPrice = 1;
let budget = 11;

if (budget >= milkPrice) {
    budget -= milkPrice;
    console.log("buy milk");
    
    if (budget >= breadPrice) {
        budget -= breadPrice;
        console.log("buy milk and bread");

    if (budget >= butterPrice) {
        budget -= butterPrice;
      
        console.log("buy milk, bread and butter");
     if (budget >= cheesePrice) {
         budget -= cheesePrice;
         console.log("and buy cheese please!");
} 
    console.log("money left is", budget);
}}}
