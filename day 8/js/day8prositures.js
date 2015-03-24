/* Matthias Hufnagl
 3-7-15
 section 00
 Day 8 prositures
 */

//alert("test to see if it werks");

//this is a basic function

function calcAreaF(w,h){

    var area = w*h;
    return area;


}
var area =calcAreaF(6,8);
console.log("the area of the ractangle is "+area);

// this is a prositure / ist of steps


function calcAreaP(w,h){

    var area = w*h;

    // we do not return this area
    console.log("Inside the prosidure of the area is "+area);


}

//just the func name no var to catch

calcAreaP(12,16);