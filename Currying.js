 ("use strict");
 let Planets = function(a,c){
    return function(b){
        return"Fav Plantes is " +a +  " and " +b  + " and " 
        + c;
    }
}
 var favplanets = Planets ("Jupitor" , "Mars");
 console.log(favplanets);
 // it always returns function
 console.log(favplanets("Earth"));
// console.log(favplanets("mars"));