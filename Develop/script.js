// Assignment code here
// GENERATE ELEMENT
var generateBtn = document.querySelector("#generate");

// GENERATOR FUNCTIONS FROM http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  const symbols = "!@#$%^&*()_+=-~`?><:/\|.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbols());

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);