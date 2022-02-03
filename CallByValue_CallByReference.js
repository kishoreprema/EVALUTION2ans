// call by value
"use strict";
let a = 5;
    let b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);

// call by refernce

let c = { greeting : 'hi' };
    let d;
    d = c;
    c.greeting = 'Kishore';
    console.log(c);
    console.log(d);

   