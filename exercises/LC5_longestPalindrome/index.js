//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  startindex = 0; // this is the starting point of palindrome, we use slice to find out the length of the palindrome
  maxlength = 1;

  // helping function to expand the pointer for each for loop run,
  // to find out if the string is palindrome
  function expandAround(left, right) {
    // main equation for finding out if the string porion of for loop is the longest palindrome
    while (left >= 0 && right <= s.length && s[left] == s[right]) {
      console.log(left, right, s[left], s[right]);
      currentPalindrome = right - left + 1;
      console.log(currentPalindrome);

      if (currentPalindrome > maxlength) {
        maxlength = currentPalindrome;
        startindex = left; // confused
        console.log(maxlength, startindex);
      }
      left -= 1;
      right += 1;
    }
  }

  // this goes to each letter from start ;to find out if the longest palindrome exist around this startindex
  for (i = 0; i <= s.length; i++) {
    console.log(i);
    expandAround(i - 1, i + 1); //for odd number length palindrome
    expandAround(i, i + 1);
  }

  return s.slice(startindex, startindex + maxlength);
}

module.exports = longestPalindrome;
