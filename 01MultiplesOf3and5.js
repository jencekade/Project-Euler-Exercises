function sumOfMultiplesOf3And5() {
  let array = [];

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0) {
      array.push(i);
    } else if (i % 5 === 0) {
      array.push(i);
    }
  }

  let sumofArray = array.reduce(function(total, num) {
    return (total += num);
  }, 0);
  
  return sumofArray;
}

sumOfMultiplesOf3And5();
// 233168 this is the answer
