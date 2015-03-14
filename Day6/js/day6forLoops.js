/* Matthias Hufnagl
 3-14-15
 section 00
 Day 6 for loops
 */

//alert("test to see if it werks");


//for(initinalstion; condition; incroment of change) {}
//we use i alot i loops it stand for iteration

for(var i = 0; i<20; i++){

    console.log("the value of i is "+i);
}

console.log(i);

//Brak in a loop

for(var j=0; j<5; j++){

    console.log("the value of j is " +j);

    if(j===3){
        console.log("j is 3!!");
        break;

    }
console.log("the vaule of j is "+j);
}

//(var j=5; j>0; j--)

for(var k=0; k<3; k++){

    if(k===0){
        console.log("the value of zero ");


    }else if(k===1){

        console.log("the value is one")

    }else if (k===2){

        console.log("the value is two")
    }


}