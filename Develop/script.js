// Assignment code here

// GENERATE ELEMENT
var generateBtn = document.querySelector("#generate");

//RANDOM ARRAY CHARACTERS IF CHOSEN
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "~", "`", "?", ">", "<", ":", "/", "."];
console.log(lower, upper, number, symbol);

//CONFIRMATIONS
var lowerConfirm;
var upperConfirm;
var numberConfirm;
var symbolConfirm;
var passwordLength;

// CHOOSE PASSWORD LENGTH
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to have? Please enter a number from 8 - 128.");

  while (passwordLength != null , passwordLength < 8 || passwordLength > 128) {
    alert("Invalid response. Please enter a number 8 - 128.")
    var passwordLength = prompt("How many characters would you like your password to have? Please enter a number from 8 - 128.");
  }

 // CHOOSE PASSWORD CRITERIA
 var lowerConfirm = confirm("Include lowercase?");
 var upperConfirm = confirm("Include uppercase?");
 var numberConfirm = confirm("Include numbers?");
 var symbolConfirm = confirm("Include symbols?")
   while(lowerConfirm === false && upperConfirm === false && numberConfirm === false && symbolConfirm === false) {
     alert("You must choose at least one character type.");
     var lowerConfirm = confirm("Include lowercase?");
     var upperConfirm = confirm("Include uppercase?");
     var numberConfirm = confirm("Include numbers?");
     var symbolConfirm = confirm("Include symbols?")    
 }

//PASSWORD CRITERIA MERGES WITH ARRAY CHARS
 
var passwordChars = "";

  if (lowerConfirm) {
    passwordChars = passwordChars.concat(lower)
  }

  if (upperConfirm) {
    passwordChars = passwordChars.concat(upper)
  }

  if (numberConfirm) {
    passwordChars = passwordChars.concat(number)
  }

  if (symbolConfirm) {
    passwordChars = passwordChars.concat(symbol)
  }

// CREATES & RETURNS RANDOM PASSWORD
  var randomPassword = "";

  for (var i = 0; i < passwordLength; i++){
    randomPassword = randomPassword + passwordChars[Math.floor(Math.random() * passwordChars.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);