/* Matthias Hufnagl
 3-7-15
 section 00
 Day 3 Casting
 */

//alert("test to see if it werks");

//casting variables mean trating one datatype like another... if posible

var stingerVar ="6";
var result =7 + stingerVar;
console.log(result);
//Number - treats whateverr inside like a number if posible

var castingResults =7 + Number(stingerVar); // The N  on Number needs to be capitaliszed.

console.log(castingResults);

//Cast number to be a text string
//string()- treat whatever is inside as a text string

var areaCode = 407;
var prefix = 555;
var lineNumber =1234;

var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);

console.log(phoneNumber);
console.log( "("+areaCode+")"+prefix+"-"+lineNumber);

//Pasing Integers

//parseIt() - looks though a text and returns and itnger
//only the fit num in the stirmg is returned!
//if the first charater in the text string canNot be converted into a number and it returns NAN = Not a Number


var a =parseInt("40 years old.");
console.log(a);

var b = Number("40 years old.");
console.log(b);

var c =parseInt("He was 40.")
console.log(c);

//Prompts only rturn text strings!!!!

var tshitsOwned = prompt("how meny t-shirts do you curntly own");

var tshirtsBought = prompt("How meny t-shirts did you buy today");

//calculate the total number of shirts

var totalShirts = parseInt(tshitsOwned) + Number(tshirtsBought);

console.log("You Curently own "+totalShirts+"shirts");