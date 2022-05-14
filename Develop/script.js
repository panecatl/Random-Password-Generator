// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characters = "0123456789abcdefghijklmnopqrstuvwyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
