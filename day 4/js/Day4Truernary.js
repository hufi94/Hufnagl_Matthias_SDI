/* Matthias Hufnagl
 3-7-15
 section 00
 Day 3 Prompts
 */
//alert("test to see if it werks");


//if your gpa is over 2.0 than you can graduage
//basic condisional

//crater a var for gpa

var gpa = 3.5;

if(gpa > 2.0){

    console.log("you can graduade");

}else{
    console.log("you stupid");

}

//(condition to test ) ? code to run if true: code to run if false

// create a basic turnerry function for our GPA

(gpa > 2.0)? console.log(" you can graduade"):console.log("work harder not gtaduade");

//if a child is under 10 then tey must green eggs and ham, otherwise tey can time maschine

// create a var for child age for and for the book

var age = 6;
var book;

//use a tenerry to definee the book

book= (age <10) ? "green eggs and ham" : "The tome machine";

console.log("the kid should read "+book+".");


// value of book if basic condisonal

var bookBasic;

if(age <10){
    bookBasic = " green eages and ham";
}else{
    bookBasic = "the time mashine";
    console.log(bookBasic);
}