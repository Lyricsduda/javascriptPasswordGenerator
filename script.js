// Code for when the button is pushed, it prompts the user for the password generation criteria. 
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays for generating password.
var passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordSpecialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Declared variable's for the functions.
var passwordLength = "";
var promptSpecialChar;
var promptNumbers;
var promptLowerCase;
var promptUpperCase;

// Prompt for user to confirm how many characters they want in there password
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain"))

  // While loop to check if user input meets minimum criteria
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8-128 characters");
    var passwordLength = (prompt("How many characters would you like your password to contain"));
  }

  // Variables for password additional criteria
  var promptSpecialChar = confirm("Click OK to confirm including special characters.");
  var promptNumbers = confirm("Click OK to confirm including numeric character.");
  var promptLowerCase = confirm("Click OK to confirm including lowercase characters.");
  var promptUpperCase = confirm("Click OK to confirm including uppercase characters.");

  // While loop to check if user selected at least one piece of critera
  while (promptSpecialChar === false && promptNumbers === false && promptLowerCase === false && promptUpperCase === false) {
    alert("Must select at least one character type")
    var promptSpecialChar = confirm("Click OK to confirm including special characters.");
    var promptNumbers = confirm("Click OK to confirm including numeric character.");
    var promptLowerCase = confirm("Click OK to confirm including lowercase characters.");
    var promptUpperCase = confirm("Click OK to confirm including uppercase characters.");
  }

  // if statement's to create a array of what additional character types the user wishes to have in there password
  var passwordChar = []

  if (promptSpecialChar) {
    passwordChar = passwordChar.concat(passwordSpecialChar)
  }

  if (promptNumbers) {
    passwordChar = passwordChar.concat(passwordNumbers)
  }

  if (promptLowerCase) {
    passwordChar = passwordChar.concat(passwordLowerCase)
  }

  if (promptUpperCase) {
    passwordChar = passwordChar.concat(passwordUpperCase)
  }


  //Empty variable to be filled based on the password generated from the for loop
  var passwordGenerate = ""

  //For loop to generate a password thought random numbers and special characters from the array
  for (var i = 0; i < passwordLength; i++) {
    passwordGenerate = passwordGenerate + passwordChar[Math.floor(Math.random() * passwordChar.length)];

  }
  return passwordGenerate;


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}