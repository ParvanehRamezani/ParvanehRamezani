/*
let friends = ["Carlo", "Parvaneh", "Sevtap"];

console.log("hello " + friends[0]);
console.log("hello " + friends[1]);
console.log("hello " + friends[2]);
*/


//Task 1- Output the last element of the array:

let numbers = [3, 2, 9, 5, 6];

function lastElement(numbers) {

    return numbers[numbers.length - 1];

}
console.log("1. Last element is: " + lastElement(numbers));




function sumElement(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}
console.log("2. Sum of the numbers : " + sumElement(numbers));

function averageElement(numbers) {
    let sumOfNumbers = sumElement(numbers);
    let averageNumbers = sumOfNumbers / numbers.length;

    return averageNumbers;
}
console.log("3. Average of numbers : " + averageElement(numbers));



function largestNumber(numbers) {
    let larg = numbers[0];
    for (let i = 1; i < numbers.length; ++i) {

        if (larg < numbers[i]) {
            larg = numbers[i];
        }

    }
    return larg;
}
console.log("4. Largest numbers is : " + largestNumber(numbers));





/*write also the other functions listed below


lastElement(numbers);
sum(numbers);
largestNumber(numbers);
average(numbers);*/