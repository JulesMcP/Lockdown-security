// Assignment code here

// GENERATE ELEMENT
var generateBtn = document.querySelector("#generate");

//RANDOM ARRAY CHARACTERS IF CHOSEN
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "~", "`", "?", ">", "<", ":", "/", "."];
console.log(lower);

// CHOOSE PASSWORD LENGTH
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to have? Please enter a number from 8 - 128.");

  while (passwordLength != null , passwordLength < 8 || passwordLength > 128) {
    alert("Invalid response. Please enter a number 8 - 128.")
    var passwordLength = prompt("How many characters would you like your password to have? Please enter a number from 8 - 128.");
  }

 // CHOOSE PASSWORD CRITERIA
 var passwordLower = confirm("Include lowercase?");
 var passwordUpper = confirm("Include uppercase?");
 var passwordNumber = confirm("Include numbers?");
 var passwordSymbol = confirm("Include symbols?")
   while(passwordUpper === false && passwordLower === false && passwordSymbol === false && passwordNumber === false) {
     alert("You must choose at least one character type.");
     var passwordLower = confirm("Include lowercase?");
     var passwordUpper = confirm("Include uppercase?");
     var passwordNumber = confirm("Include numbers?");
     var passwordSymbol = confirm("Include symbols?")    
 }

 var randomPassword = "";


}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);