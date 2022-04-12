/**
 * Pointers approach - time O(n^2), space O(1)
 */

var longestPalindrome = function (s) {
  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; ++i) {
    let low = i - 1;
    let high = i + 1;

    while (low >= 0 && s[low] == s[i]) {
      // even palindrom case
      --low;
    }

    while (high <= s.length && s[high] == s[i]) {
      ++high;
    }

    while (low >= 0 && high <= s.length && s[high] == s[low]) {
      --low;
      ++high;
    }

    // console.log(low+1, high-1, "\n");
    if (high - low > maxLength) {
      maxLength = high - low;
      start = low;
    }
  }

  // console.log(start+1, start+maxLength)

  return s.substring(start + 1, start + maxLength);
};

/**
 *
 * Dynamic programming approach - time O(n^2), space O(n^2)
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;

  const subProblems = new Array(s.length);

  let maxLength = 1;
  let start = 0;

  for (let i = 0; i < s.length; ++i) {
    subProblems[i] = new Array(s.length);
    subProblems[i][i] = true;
  }

  // console.log(subProblems);

  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] == s[i + 1]) {
      subProblems[i][i + 1] = true;

      // save longer palindrome of size 2
      if (maxLength == 1) {
        start = i;
        maxLength = 2;
      }
    }
  }
  // console.log(start, maxLength)

  // console.log(subProblems);

  for (let k = 2; k < s.length; ++k) {
    for (let i = 0; i < s.length - k; ++i) {
      const j = i + k;
      // console.log(i, j);
      if (s[i] == s[j] && subProblems[i + 1][j - 1]) {
        subProblems[i][j] = true;

        if (j - i + 1 > maxLength) {
          start = i;
          maxLength = j - i + 1;
        }
      }
    }
    // console.log('');
  }

  // console.log(subProblems);
  // console.log(start, maxLength);

  return s.substring(start, start + maxLength);
};

/**
 * Naive approach - time O(n^3), space O(1)
 */
var longestPalindrome = function (s) {
  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j < s.length; ++j) {
      let isPalindrome = true;
      const currLen = j - i + 1;
      for (let k = 0; k < currLen / 2; ++k) {
        if (s[i + k] !== s[j - k]) {
          isPalindrome = false;
        }
      }

      if (isPalindrome && currLen > maxLength) {
        start = i;
        maxLength = currLen;
      }
    }
  }

  return s.substring(start, start + maxLength);
};
