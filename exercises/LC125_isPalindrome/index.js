//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, "");
  console.log(s);

  let left = 0;
  let right = s.length - 1;
  console.log(s[right]);

  while (left < right) {
    console.log(left, right);
    if (s[left] !== s[right]) {
      console.log(s[left], s[right]);
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// function isPalindrome(s) {
//     s = s.toLowerCase.replace(/[\W_]/g, "");
//     console.log(s);

//     let left = 0;
//     let right = s.length - 1;
//   //  let left_last = s.length / 2;
//   //  let right_last = s.length / 2;

//     while(left < right) {
//         if (s[left] == s[right]) {
//             return true;
//         }

//         else
//             return false;

//     left++;
//     right--;

//     }
//     return null;

// }

module.exports = isPalindrome;
