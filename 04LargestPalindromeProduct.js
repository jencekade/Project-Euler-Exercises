function largestPalindromeProduct() {
  var product = 0;
  var productToString = '';
  var backward = '';
  var palindrome = [];
  
  for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
      product = i * j;
      productToString = product.toString();  //convert number to String
      backward = productToString.split('').reverse().join('');  //reverse the String
      if (productToString === backward) {
        palindrome.push(product);   //push into array if palindrome
      }
    }
  }
  
  palindrome.sort(function(a, b) {
    return b - a;   //reverse the array from descending order
  });
  
  console.log(palindrome[0]);
  
}

largestPalindromeProduct();


// answer is 906609
