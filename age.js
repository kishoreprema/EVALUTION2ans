"use strict"
function currentage(birthYear){
    const convertToString = birthYear + "";
if(typeof birthYear === "number" && convertToString.indexOf(".") === -1)    {
    const year = new Date();
    const currentYear = year.getFullYear();
    const age = currentYear - birthYear;
    console.log(age);
}else
 console.log("enter the valid value");
}
currentage(2001);