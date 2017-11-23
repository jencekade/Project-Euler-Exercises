let primes = [2];
let nextPrime = 3;
let primeTest = [];

function allZero(numb) {
  return numb > 0;
}

for (nextPrime = 3; primes.length < 10001; nextPrime += 2) { //assumes all primes are odd when 2 is a prime
  for (let index = 0; index < primes.length; index++) {
    primeTest.push(nextPrime % primes[index]); //push the number % each prime into array
  }
  if (primeTest.every(allZero)) { //see if the array doesn't contain 0 after % each prime
    primes.push(nextPrime);
  }
  primeTest = [];
}

console.log(primes[primes.length - 1]);


//104743 is the answer

/*Find the 10001st prime number.
Javascript interpreter will try to time out the program. If you override
the timeout and wait for about 4 seconds, the program will eventually spit
out the answer.*/
