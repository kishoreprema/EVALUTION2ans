var planets = function(a){
    return function(b){
        return"fav plantes is " +a +"and " +b;
    }
}
 var favplanets = planets ("jupitor");
 favplanets("earth");
 favplanets("mars");