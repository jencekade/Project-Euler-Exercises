function smallestMultiple() {
  let productsOfAll = 1;
  let array = [];
  
  for (var i = 1; i <= 20; i++) {
    productsOfAll *= i;
  }
  //console.log(productsOfAll);
  
  let product = 2520;
  while (product < productsOfAll && array.length <1) {
    if (product % 11 == 0 && product % 12 == 0 && product % 13 == 0) {
      if (product % 14 == 0 && product % 15 == 0 && product % 16 == 0) {
        if (product % 17 == 0 && product % 18 == 0) {
          if (product % 19 == 0 && product % 20 == 0) {
            array.push(product);
          }
        }
      }
    }
    product++;
  }
  
  array.sort(function(a, b) {
    return a - b;
  });
  
  console.log(array[0]);
  
}

smallestMultiple();


//232792560 is the answer
//the smallest multiple from numbers 1 to 20, meaning divisible evenly from 1 to 20

/*Since the numbers 2 through 10 are multiples of the set of numbers from 11 through 20,
I can omit them from the if statements and make the code more memory efficient.
For instance the numbers 2,3,6,9 are multiples of 18. So if a number is divisible by 18,
you can automatically assume the number is also divisible by 2,3,6, and 9 */
