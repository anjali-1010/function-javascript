function eligibleforvote(age){
    if (age>=18){
        console.log("you are eligible for vote.")
    }else{
        console.log("you are not eligible for vote.")
    }
}
var a = require("readline-sync");
var age= a.questionInt("What is your age: ")
eligibleforvote(age)