 ("use strict");
 let planets = function(a,c){
    return function(b){
        return"fav plantes is " +a +  " and " +b  + " and " 
        + c;
    }
}
 var favplanets = planets ("jupitor" , "mars");
 console.log(favplanets("earth"));
// console.log(favplanets("mars"));