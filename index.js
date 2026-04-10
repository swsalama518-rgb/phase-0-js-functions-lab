function calculateTax(amount) {
  return amount * 0.10;
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}   
function findMaximum(num1, num2) {
if (num1 > num2) {
    return (num1);
}   else {
    return (num2);
}
}
function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;        
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - ( originalPrice * discountPercentage / 100);
  
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };