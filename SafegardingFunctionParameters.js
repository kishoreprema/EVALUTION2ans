function Fun(func){
    //Call the function but only if it is a function:
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}
let Array = [];
let f = function () {}
Fun(Array);