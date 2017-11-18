function sumSquareDifference() {
  
  let sumOfSquares = 0;
  for (let i = 1; i <= 100; i++) {
    sumOfSquares = sumOfSquares + i * i;
  }

  let squareOfSum = 0;
  let sumTotal = 0;
  for (let j = 1; j <= 100; j++) {
    sumTotal += j;
  }
  squareOfSum = sumTotal * sumTotal;

  console.log(squareOfSum - sumOfSquares);
}

sumSquareDifference();

//25164150 is the answer

/*Squares each number in the set and totals it.
Finds the total of a set of numbers and squares it.
Find the difference*/
