/*Matthias Hufnagl
3-17-15
section 00
Day 7 loop arrays
*/

//alert("test to see if it werks");


//tell each member of the scubby gang that soved a myatery

// create an array of gang menbers

var names = [" Scoby Doo", " Shaggy", " Velma", " Daphane", " Fred"];

names.push(" Scrappy")

for (var i = 0; i<names.length; i++){
    console.log("You solved the case"+names[i]+"!");

}


//keep track of bills and total of average

var bills =[50,10,5,20,10,60,70]

var total = 0;

var average = 0;

var numItems = 0

for(var j=0; j<bills.length; j++){

    if(bills[j] >= 15){

        total += bills[j];
        numItems++;
    }

    //add each bill to the total

}
console.log("The total is "+total);

average =total / numItems;
console.log("The average is "+average);
