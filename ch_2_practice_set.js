




//CHAPTER 2 PRACTISE SET


//QUESTION. 1
let age = prompt("what's your age")

if(age>=10 && age<=20){
    alert("You're in the right age")
}

else{
    alert("you are under age")
}

console.log("you are ", (age>=10 && age<=20? "ready" : "not ready"))



//QUESTION. 2
let num = prompt("what's is the number")
num = Number.parseInt(num)

if(num%2==0 && num%3==0){
    alert("number is divisible by 2 and 3")
}

else{
    alert("number is not divisible b 2 and 3")
}

console.log("Your number is",(num%2==0 && num%3==0? "divisible by 2 & 3" : " not divisible by 2 and 3"))



//QUESTION. 3
let number= prompt("check your number")

 


if(number%2==0){
    alert("Your number is divisible by 2")
}

else if(number%3==0){
    alert("Your number is divisible by 3")
}

let a = number%2==0? "divisible by 2" :"not divisible by 2"
console.log(a)







































































































