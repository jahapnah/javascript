// FOR LOOP

//SUM OF 1st NATURAL NUMBERS

let sum = 0
let n = prompt("Enter your number")
n = Number.parseInt(n)

for(let a = 0; a < n; a++ ){
   sum += (a+1)
}

console.log("sum of " + n + " natural number is " + sum)

  

// MULTIPLICATION OF 1ST NATURAL NUMBERS

let factorial = 0
let p = prompt("Enter your factorial number")
p = Number.parseInt(p)

for( let num = 0 ; num<p ; num++){
    factorial *= (num+1)
}
console.log("multiplication of first " + p + "number is " + factorial )


//FOR IN LOOP

let obj = {
    Rishi : 99,
    Areeb : 94,
    Anshul : 92,
    Swapnil : 83,
    Shreyash : 00,
}

for (let x in obj){
    console.log(" marks of " + x + " is " + obj[x])
}

