/* Matthias Hufnagl
 3-7-15
 section 00
 Day 7 return
 */

//alert("test to see if it werks");

//return a value form a our  function to main code

function calcArea(w,h){

    var area =w*h;

    console.log("inside the funtion of the area is "+area);
    //return the area to the main code

    return area;

}
//create a var to catch the retun value

var rectArea = calcArea(10,20);

//outside

console.log(rectArea);


function cricleArea(r ){
    //Pie times R

    var area = Math.PI * r*r;

    return area;
}

var circArea =cricleArea(6);

console.log("the area of the cricle is "+circArea);

var resultsTwice = circArea *2;
console.log("Twice the area is "+resultsTwice);