/* Matthias Hufnagl
 3-7-15
 section 00
 Day 7 scope
 */

//alert("test to see if it werks");

//varible scope

//varibles inside and outside of a function

// try not to use the same varible names but in bug files its goig to be imposible

//create a var for with in aour main code scoped outside of the function - main code

var width=5;

function calcPeri(){

    //create a var width indide of th function
    //this is scoped to functiom cal

    var width =10;

    // create a varible for height an d perimiter

    var height =20;

    var perimeter = width*2 + height*2;

    console.log("inside of the function , the perimiter is "+perimeter);



}

console.log("before the function call, width ="+width);

calcPeri();

console.log("after the function call, width, the perimiter is "+width);


