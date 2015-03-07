/*
 Matthias Hufnagl
 o3/05.2015
 Section 00
 Day 2 Lab Expressions
 */

//alert("Day2LabExpressions.");

// Part1 of pi slice

var people = 10;
var slices = 8;
var ordered = 7;

var slicesPerPerson = ordered * slices / people;
console.log(slicesPerPerson);


console.log("Each person ate "+slicesPerPerson+" slices of pizza at the party.")

// Part2 of pi slice



var sparky = (slices * ordered) % people;
console.log(sparky);

console.log("Sparky got " +sparky+ " slices of pizza.");


// Average shopping bill


var week1 = 120;
var week2 = 145;
var week3 = 100;
var week4 = 124;
var week5 = 160;
var fiveWeeks = 5;

var fiveWeeksOfGroceries = week1 + week2 + week3 + week4 + week5;

var average = fiveWeeksOfGroceries / fiveWeeks;

console.log("You have spent a total of " +fiveWeeksOfGroceries+ " on groceries over 5 weeks. That is an average of " +average+ " per week");

// Discounts

    var orginalPrice = 550;
    var diccountPercentage  = 25/100;
    var descriptionItem = "iPhone";
    var salesTaxPercentage  = 11/100;

var resultWithTax = orginalPrice - diccountPercentage * (orginalPrice) * salesTaxPercentage ;
var rusultWithoutTax = orginalPrice - diccountPercentage * orginalPrice ;

console.log(resultWithTax);

console.log(rusultWithoutTax);

console.log("Your " +descriptionItem+ " was originally $" +orginalPrice+", but after a " +diccountPercentage+"% discount, it is now $"+rusultWithoutTax+" without tax, and $"+resultWithTax+" with tax")









