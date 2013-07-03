#!/usr/bin/env node
var primes = new Array();
primes.push(2);

function isPrime(num, primes) {
  var itIsPrime = true;

  primes.forEach(function(n) {
    if (n <= Math.sqrt(num)) {
      if (n > 1 && num % n < 1) {
        itIsPrime = false;
      }
    }
  });
  return itIsPrime;
}

i = 3;
do {
  if (isPrime(i, primes)) {
    primes.push(i); 
  }
  i++;
} while(primes.length < 100);


var primesString = "";
for (var i=0; i<primes.length; i++) {
  primesString += primes[i] + ",";
}

primesString = primesString.substring(0, primesString.length-1);

console.log(primesString);

var fs = require('fs');
var outfile = "part2.txt";
fs.writeFileSync(outfile, primesString);
