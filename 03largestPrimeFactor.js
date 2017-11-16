function largestPrimeFactor() {
  
  let largeNumber = 600851475143;
  let primeNumbers = 2;
  
  while (primeNumbers * primeNumbers < largeNumber) {
    while (largeNumber % primeNumbers === 0) {
      largeNumber = largeNumber / primeNumbers;
    }
  primeNumbers++;
  }
  
  console.log(largeNumber);
  
}
largestPrimeFactor();

//answer is 6857

/* The code below is memory inefficient

function largestPrimeFactor() {
  
  let allNumbers = [];
  for (let a = 2; a < 600851475143; a++) {
    allNumbers.push(a);
  }

  let primeNumbers = [];
  while (allNumbers.length > 1) {
    primeNumbers.push(allNumbers[0]);
    for (let b = 0; b < allNumbers.length; b++) {
      if (allNumbers[b] % primeNumbers[primeNumbers.length - 1] === 0) {
        allNumbers.splice(b, 1);
      }
    }
  }
  //console.log(primeNumbers);
  
  
  //calculating the prime factors of 600851475143
  let primeFactors = [];
  for (let c = 0; c < primeNumbers.length; c++) {
    if (600851475143 % primeNumbers[c] === 0) {
      primeFactors.push(primeNumbers[c]);
    }
  }
  //console.log(primeFactors);
  console.log(primeFactors[primeFactors.length - 1]);
}

largestPrimeFactor();
*/
/*I know this works because I tried it with the example of 13195.
But when I tried with 600851475143, my program crashes because
I think there isn't sufficient memory to handle that large of 
a calculation. I need to write more efficient code*/
