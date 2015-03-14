/* Matthias Hufnagl
 3-14-15
 section 00
 Day 6 while loops
 */

//alert("test to see if it werks");



//BASIC WHILE Loop

//inessulise start a var

var conter =0;

//star while loop
//condidion to test goes inside of ()
while(conter<200){
    console.log("never end");
    console.log(conter);

    conter++
}
//make a change to the conting var


//do while loop
//this loop will run the code fist thn check the condition

/*
do{
code run
} while (condition)to test

 */

var i = 20;

do{
    console.log("the num is "+i);
    //change the conting var

    i++;

}while(i<10);