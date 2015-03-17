/* Matthias Hufnagl
 3-17-15
 section 00
 Day 7 zobies
 */

//alert("test to see if it werks");

//ZOMBIE ATTCAT

// we have accadently created a zombe a t full sail

// a zombie can bite a person 4 people a day and turn them in to zombies
//  the CDC wants to know how meany zombies the will be in 8 days

var numZombies = 1;

//how meany bites per zombie a day

var numBites =4;

//Number of days that CDC wants

var days = 8;

//create for loop to calculate zombie number
/*
for(var i = 1; i<=days; i++){

    // how meany new zombies get made avery day

    var newZombies = numZombies* numBites;

    //add the new zombies to the existing horrede

    numZombies+=newZombies;

    // results

    console.log("Ther are "+numZombies+" number of Zombies on day #"+numZombies );

}
*/

// how long will it take to get a million zombies

var numDays = 1;

while(numZombies <= 1000000){

    console.log("Ther are "+numZombies+" number of Zombies on day #"+numDays );

    numDays++;
}

console.log("It will take "+(numDays-1)+ "days to reach a million zombies,");
