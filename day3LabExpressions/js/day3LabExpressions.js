/* Matthias Hufnagl
 3-7-15
 section 00
 Day 3 Lab Expressions
 */

//alert("Testing if connected ");

var saleTax = 2.3;
// This will add sale tax to the final bill.

saleTax ++;
//adds 1 to the sale tax

var fordTank = [12.5, 13.5, 16.5, 18.5];
// Tank sizes

var gasPerGallon = prompt("Please, Type in how much, 1 gallon of Untreated Gasoline cost  ");
//User will type price of gallon of gas

var fillUpPerWeek = prompt("Please , Enter how meany times you fill up on gas per week ");
//User will enter how meany times they fill up per week.

var gasStorage = prompt("Please, Enter the limit of gallons you can fit in your gas tank.\n Here are some tank sizes for ford "+fordTank);
//User will type how big the tank of there car is.

var totalCostOfGas = fillUpPerWeek * gasStorage * gasPerGallon + saleTax;
//The total cost is multiplied.


alert("You spend $"+totalCostOfGas+" per week.")
//alert has been pushed to user how much tey spent on gas per week

console.log("You spend $"+totalCostOfGas+" per week.");
//this is the total amount of gas this person has spent per week.


