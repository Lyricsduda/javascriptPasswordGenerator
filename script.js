// Code for when the button is pushed, it prompts the user for the password generation criteria. 
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays for generating password.
var passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordSpecialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var passwordLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Declared variable's for the functions.
var passwordLength = "";
var promptSpecialChar;
var promptNumbers;
var promptLowerCase;
var promptUpperCase;

// Prompt for user to confirm how many characters they want in there password
function generatePassword(){
  var passwordLength = (prompt("How many characters would you like your password to contain"))

  // While loop to check if user input meets minimum criteria
  while (passwordLength < 8 || passwordLength > 128){
    alert ("Password length must be between 8-128 characters");
    var passwordLength = (prompt("How many characters would you like your password to contain"));
  }








}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}