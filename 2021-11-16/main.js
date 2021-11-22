
//Output the squares of the first 10 numbers
// starting with 1
for (let i = 1; i <= 10; i++) {

    console.log(i * i);
}


//Output the sum of the first 10 numbers
//starting with 1
let sum = 0;
for (let i = 1; i <= 10; i++) {

    sum += i;
}
console.log(sum);


//Count down from 10 to 0 and output it on console.

for (let i = 10; i >= 0; i--) {

    console.log(i);

}

//Exercise1 : Print all even numbers between 0 and 100

for (let i = 0; i <= 100; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}

//BONUS EXERCISE:
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else
        console.log(i);
}


let row = 5;
let star = "";
for (let i = 0; i < row; i++) {
    star += "*";

    console.log(star);
}
