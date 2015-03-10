/*
 Matthias Hufnagl
 o3/05.2015
 Section 00
 Day 4 Condisionals
 */

//alert("helo")

//Basic Condisional

/* if(condition to test)
      { code run if the condition is true}

 */

//create a booolean

var oldEnough = true;

//if the kid is old enough, he can ride the ride

if(oldEnough){
    //code to run if the kid if old engnoh
    console.log("THe kid if old enghnoh to ride the rolercoaster");
} else {

    //code to run if kid is not old egnoh
    console.log("Sorry you are too young")
}



//relational operators

//if the kid is over 48 inches tall he can ride the coaster

var kidHeight = 47;

//crate a varible for min height requriemnt

var minHeight = 48;

// crate var for sincker lifts

var sneakerLifts = 2;

//test the kids height

if(kidHeight > minHeight){
    console.log("Kid is tall enough to ride the coaster");
} else if (kidHeight + sneakerLifts > minHeight){
    console.log("If you use enough namkins");

} else {
    console.log("Sorry you are to short");

}
