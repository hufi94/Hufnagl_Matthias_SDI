/* Matthias Hufnagl
 3-7-15
 section 00
 Day 8 anonamess
 */

//alert("test to see if it werks");

/*
function functionName(){




}





 */

//anonymous function

/*
var functionName = function=(){




}
 */
//the //anonymous function are extremely popular in js and jquery
//heighly used in objects objects orieented programming
// wick an easy
//u can either a basic or //anonymous  for now

var basicArea2 = triangleArea(2,9);
console.log("the area from the basic function before the defenition  is " +basicArea2)

/*
var anonArea2 = triangleAreaAnon(3,4);
console.log("the area from the basic function before the defenition  is " +anonArea2)
*/
//DONT DO THIS

function triangleArea(b, h){

    var area = 5* b*h;
    return area;



}

//anonymous function

var triangleAreaAnon = function(b, h){

    var area = 5*b*h;
    return area;


}

var basicArea = triangleArea(5,6);
console.log("The area of the basic function is "+basicArea);

var anonArea = triangleAreaAnon(4,5);
console.log("the are of the anon function is"+anonArea);
