/* Matthias Hufnagl
3-12-15
section 00
Day 5 nesting ifs
*/

//alert("test to see if it werks");

//some desitions effect other desidions

//if it is warm then lets go to the beach if it is not then lets go to the movies

// Get temperature

var temp =75;
var waterTamp =78;

//lets set water temp

if(temp >=80){
    console.log("lets go to the beach");

    if(waterTamp > 75){
        console.log("lets go swimming");
    }else{
        console.log("lets get a tan")
    }

}else{
    console.log("Lets go to the movies");
}

//do we have any kids in group

var kids ="no";
//test if we have kids

if(kids === "no"){
    console.log("lets see 50 shades of gray");

}else{
    console.log("lets see spongebob");
}

/*
//if the  water temp is above 75, lts go swimming if not then lets get a tan


if(waterTamp > 75){
    console.log("lets go swimming");
}else{
    console.log("lets get a tan")
}
*/