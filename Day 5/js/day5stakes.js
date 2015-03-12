/* Matthias Hufnagl
 3-12-15
 section 00
 Day 5 stakes
 */

//alert("test to see if it werks");

//Test a stake temperature and tell the user the done -ness levle

/*

Extra-rare or Blue (bleu) 115–120 °F
Rare 	125–130 °F
Medium rare 	130–140 °F
Medium  	140–150 °F
Medium well 	150–155 °F
Well done 160 °F+
    */

//craete a varible for oiur stake temp

var stakeTamp = prompt("what is the Temperature of you stake");
stakeTamp = parseInt(stakeTamp)

//we need to test each of the cases above to see where our temp falls into

if(stakeTamp < 115){
    console.log("your satke is uncooked");

}else if (stakeTamp < 125){
    console.log("your stake is Extra-Rare or blue");

}else if(stakeTamp < 130){

    console.log("your stake is Rare");
}else if(stakeTamp < 140){
    console.log("your stake is Medium Rare");
}else if(stakeTamp < 150){
    console.log("your stake is Medium");
}else if(stakeTamp < 155){
    console.log("your stake is Medium well");
}else if(stakeTamp < 160){
    console.log("your stake is Well- Done");
}else{
    console.log("Your stake is burnt");

}