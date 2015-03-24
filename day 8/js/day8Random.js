/* Matthias Hufnagl
 3-24-15
 section 00
 Day 8 Random
 */

//alert("test to see if it werks");

//function that gives an iterget between tow values

//create varibles for min and max values

var min = prompt("lets find a random number between two values \nPlease enter min value");

while(isNaN(min)|| min === " "){
min = prompt("Please dont leve blak and only use numbers \n what is min value")
}







while(isNaN(max)||( max=== "" ||( max <= min ){

max = prompt("Please dont leve blak and only use numbers \n what is max value")

if(isNaN(max)){
    max = prompt("Please only use numbers \n what is max value")
}else if(max==="") {
    max = prompt("Please dont leve blak \n what is max value")

}else if(max<=min) {
    max = ("Please enter a higher value then min number of " +min+ " \n what is max value")

}


}


//function call

var ranNum =getRandom(min,max);
console.log("your random number between " +min+ " and " +max+ " is" +ranNum);

//cereate function

function getRandom(min,max){

    //random intender
    var randomNumber = Math.round(Math.random()*(max-min)+min);
    return randomNumber;


}