/**
 * @author Armin Khodaei
 * @lincense: Public Domain
 */
const generateValidCode = () => {
  
  // Generate new 10 digit code from random numbers
  const preMadeCode = new String(Math.floor(Math.random() * 10000000000)) // 10 digit code
  
  // Get last digit of code to validate whole code
  let checkNumber = parseInt(preMadeCode[9])

  // For loop to get Sum of 10 digit code and compare it with checkNumber and remaining of divide
  let sum = 0
  for (let i = 0; i < 9; i++)
    sum += parseInt(preMadeCode[i]) * (10 - i)
  
  sum %= 11
  if (sum < 2) 
    checkNumber = sum
  
  if (sum >= 2) 
    checkNumber = 11 - sum
  
  // Replace last digit with valid digit
  const validCode = preMadeCode.replace(/.$/,checkNumber)
  return validCode
}
