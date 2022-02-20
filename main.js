const prompt = require('prompt-sync')();

console.log("I'm Thinking of a Number Between 1 and 100. Ill Give You 3 Chances to Guess It. Go... ")

const num = Number(Math.ceil(Math.random()*100))
let guess = Number(prompt(" > "))
let count = 1

while (count <= 2) {
    if (guess === num) {
        console.log("Congrats!!! You Have Won a Free Trip to Outer Space...SpaceX is Waiting For You! ")
        count = 6

    } else if (guess < num) {
        console.log("Sorry, Too Low! Guess Again! ")
        guess = Number(prompt(" > "))

    } else if (guess > num) {
        console.log("Sorry Too High! Guess Again! ")
        guess = Number(prompt(" > "))

    }
    count++
}

if (count > 2) {
    console.log("The Correct Number is: " + num)
}