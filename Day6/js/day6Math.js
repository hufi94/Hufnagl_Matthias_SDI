/* Matthias Hufnagl
 3-14-15
 section 00
 Day 6 math
 */

//alert("test to see if it werks");

//Math.round() - this is dasic rounding  5+goes up .499 and longer goes down

var num1 = 9.444;
console.log(num1);
console.log(Math.round(num1));

//Math.floor()  this rounds down

var num2 =6.1;
console.log(num2);
console.log(Math.floor(num2));

//MAth.ceil() alwos round up if there is decimal

var num3 =4.15;
console.log(num3);
console.log(Math.ceil(num3));

//Math.random() this returen a num between 0 and almost 1

var num4 =Math.random();
console.log(num4);

//Ranadom num between 0 and 10

var num5 = Math.random() * 10;
console.log(num5);

//random itendure between  0 and 100

var num6 = Math.round( Math.random()*100);
console.log(num6);


//Random num between 2 number does not start at 0

// Math.random()*(max-min)+ min;

//50 and 100

var num7 = Math.round(Math.random()* (80-50)+50);
console.log(num7);

//Math object constant
//area of circles = Radius * Radius

var radius =7;

var areaOfCircle =radius * radius * Math.PI;
//.toFixed(#) rounds the numner to the number of the decemal places that match the # inside of the ()

console.log(areaOfCircle.toFixed(2));




