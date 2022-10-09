


let a = prompt("What's your name dear ? ");
console.log(typeof a);
a = Number.parseInt(a) // converting the string to number
console.log(typeof a)


//IF ELSE STATEMENT
if (a>=18){
    alert("This is a valid age")
}

else{
    alert("This is not a valid age")
}



//IF ELSE ELSE IF STATEMENT
let age = prompt("Hey what's your age");

if(age<0){
    alert("This is an invalid age")
}

else if(age<=9){
    alert("You are a kid and are not opt for driving")
}

else if (age>9 && age<=18){
    alert("You're ready for friving but try after after 18")
}

else{
    alert("Congratulations you can opt for driving")
}

//TERNARY OPERATOR
    console.log("You can", (age<=18? "not drive" : "drive") )
    console.log("You can", (age>18? "drive" : "not drive"))
