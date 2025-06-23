/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
function isPalindrome(str) {
  let i = 0, j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function convertToBaseK(num, k) {
  if (num === 0) return "0";
  let res = '';
  while (num > 0) {
    res += (num % k).toString();
    num = Math.floor(num / k);
  }
  return res;
}

function kMirror(k, n) {
  let sum = 0;
  let L = 1;

  while (n > 0) {
    const half_length = Math.floor((L + 1) / 2);
    const min_num = Math.pow(10, half_length - 1);
    const max_num = Math.pow(10, half_length) - 1;

    for (let num = min_num; num <= max_num; num++) {
      const first_half = num.toString();
      const second_half = first_half.split('').reverse().join('');

      let palindrome;
      if (L % 2 === 0) {
        palindrome = first_half + second_half;
      } else {
        palindrome = first_half + second_half.slice(1);
      }

      const pal_num = Number(palindrome);
      const baseK = convertToBaseK(pal_num, k);

      if (isPalindrome(baseK)) {
        sum += pal_num;
        n--;
        if (n === 0) {
          break;
        }
      }
    }
    L++;
  }

  return sum;
}
