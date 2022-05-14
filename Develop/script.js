// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
/* Need to prompt user for password
  a. password length 8-128 characters 
  b. lowercase, uppercase, numbers, special characters */
  window.prompt("How many characters would you like your password to contain?");
  //need a way to verify that the password length is between 8-128
  window.confirm("Do you want to include lowercase letters?");
  //confirm if user selcted yes or no
  window.confirm("Do you want to include uppercase letters?");
  //confirm if user selcted yes or no
  window.confirm("Do you want to include numbers?");
  //confirm if user selcted yes or no
  window.confirm("Do you want to include special characters?");
  //confirm if user selcted yes or no


//generate password criteria

//Display generated password on page 
  //return "Your password is " + password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
