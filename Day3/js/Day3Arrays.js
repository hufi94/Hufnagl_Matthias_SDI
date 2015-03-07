/* Matthias Hufnagl
 3-7-15
 section 00
 Day 3 Arrays
 */

//alert("Testing to make sure it linked");

//create a basic array
var adventuresNames = ["Thor", "Hulk", "Iron Man", "Captain America"];

//Print out whole array

console.log(adventuresNames);

//Print out one spesific array

console.log(adventuresNames[2]);

//swap items in our array

adventuresNames[1]="Black Widow";

console.log(adventuresNames);

//use a var for the index numb

var num=3;

console.log(adventuresNames[num]);

//find the langth of an array
//use the length property = how many items are in the array
//dot syntax - fancy for use a period

console.log(adventuresNames.length)

//add an item in our array

adventuresNames[4]="Haweye";
adventuresNames[adventuresNames.length]="wolverine";

console.log(adventuresNames);


//Picking Oranges

var orangesPicked =[13, 350, 1000]

//How many oraganes did we pick in todal

var totalOranges = orangesPicked[0]+ orangesPicked[1]+orangesPicked[2];

console.log("The Total Number of Oranges Picked is "+totalOranges+ ".");

//var averageOranges = totalOranges/orangesPicked.length;

var averageOranges = totalOranges/3;
console.log("The average number of oranges  picked per day is "+averageOranges+".");


//Create and array of fruit

var fruitbowl = ["Apples","Mango","grape","banana"];

console.log(fruitbowl);

//push- add item in to the next open spot
// dot syntax- use a peried.

fruitbowl.push("strawberry");
console.log(fruitbowl);

fruitbowl.push("Pinapple");
console.log(fruitbowl);

//Pop- removes the last item from the array
//it allso returns that item

//var caughtItem = fruitbowl.pop();

//fruitbowl.splice(); you can remove items and add items

var caughtItem = fruitbowl.pop();

console.log(fruitbowl);

//console.log(caughtItem);

