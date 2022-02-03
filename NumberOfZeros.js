"use strict";
//give input range find number of zero
const start = 0;
const end = 50;
//convert input value to strin
// check if type of value is number or not 
if(typeof start === "number" && typeof end === "number" ){
        let count = 0;
        for(let i = start ; i <= end ; i++ ){
            const numberToString = i + "" ;
            count += numberToString.split("0").length - 1;
        }
        console.log(count);
    }