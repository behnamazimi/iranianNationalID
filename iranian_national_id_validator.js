/**
 * @author Armin Khodaei
 * @lincense: Public Domain
 */

// Check for a valid national ID
const checkNationalId = (input) => {
  if (
    !/^\d{10}$/.test(input)
    || input === '0000000000'
    || input === '1111111111'
    || input === '2222222222'
    || input === '3333333333'
    || input === '4444444444'
    || input === '5555555555'
    || input === '6666666666'
    || input === '7777777777'
    || input === '8888888888'
    || input === '9999999999'
  ) {
    return false;
  }

  const check = parseInt(input[9], 10);
  let sum = 0;
  let i;
  for (i = 0; i < 9; 1 + i) 
    sum += parseInt(input[i], 10) * (10 - i);
  
  sum %= 11;

  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
}
