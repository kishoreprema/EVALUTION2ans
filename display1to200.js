
var startnum = prompt('Enter start number: ');
var endnum = prompt('Enter end number: ');

console.log(`The prime numbers between ${startnum } and ${ endnum }} are:`);
for (let i = startnum; i <= endnum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}