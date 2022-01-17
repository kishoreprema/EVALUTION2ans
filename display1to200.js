
var startnum =(1);
var endnum = (200);

console.log(`The prime numbers between ${startnum } and ${ endnum }} are:`);
for (let i = startnum; i <= endnum; i++) {
      var isPrime = false;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
             isPrime = true ;
            break;
        }
    }
    if (i > 1 && isPrime == 0) {
        console.log(i);
    }
}