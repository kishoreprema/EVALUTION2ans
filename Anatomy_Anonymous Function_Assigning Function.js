//anatomy 
function SayHi() {
    console.log("Hi!!!");
}
SayHi();

//anonymous 
setTimeout(function(){
    console.log("print in one seconds")
},1000);

//assigning fun to variable

let Print = function() {
    console.log('Assigning fuction to variable');
};

Print();