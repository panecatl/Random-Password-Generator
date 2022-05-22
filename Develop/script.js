
var passwordLength;
var pickedLowercaseLetters;
var pickedUppercaseLetters;
var pickedNumbers;
var pickedSpecialCharacters;
var password = "";

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "'", ".", "<", ">", "?", "/"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// where final choices will be stored
var confirmChoices; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
/* Need to prompt user for password
  a. password length 8-128 characters */ 
  var passwordLength = window.prompt("How many characters would you like your password to contain? Pick between 8 and 128.");

  //need a way to verify that the password length is between 8-128
  if (!passwordLength) {
    window.alert("Make sure you enter pickedNumbers 8 up to 128");
  }
  else if (passwordLength <= 8 || passwordLength >= 128) {
    window.alert ("Plase make sure you are only using between 8-128 characters!");
  } else {
    pickedLowercaseLetters = window.confirm("Do you want to include lower case letters?");
    pickedUppercaseLetters = window.confirm("Do you want to include upper case letters?");
    pickedNumbers = window.confirm("Do you want to include Numbers?");
    pickedSpecialCharacters = window.confirm("Do you want to include special characters?"); 
  };

  //if user selected no for everything 
  if (!pickedLowercaseLetters && !pickedUppercaseLetters && !pickedNumbers && !pickedSpecialCharacters){
    confirmChoices = alert("Please make sure you are selecting more than two criteria!");
  }
  else if (pickedLowercaseLetters && pickedUppercaseLetters && pickedNumbers && pickedSpecialCharacters) {
    confirmChoices = lowercase.concat(uppercase, specialCharacters, number);
  }

  //if user only selects three choices
  //starting with lowercase
  else if (pickedLowercaseLetters && pickedUppercaseLetters && pickedNumbers) {
    confirmChoices = lowercase.concat(uppercase, number);
  } 
  else if (pickedLowercaseLetters && pickedUppercaseLetters && pickedSpecialCharacters) {
    confirmChoices = lowercase.concat(uppercase, specialCharacters)
  }
  else if (pickedLowercaseLetters && pickedNumbers && pickedSpecialCharacters) {
    confirmChoices = lowercase.concat(number, specialCharacters)
  }
  //uppercase selections
  else if (pickedUppercaseLetters && pickedNumbers && pickedSpecialCharacters) {
    confirmChoices = uppercase.concat(number, specialCharacters)
  }

  //If user only selects two choices
  else if (pickedLowercaseLetters && pickedUppercaseLetters) {
    confirmChoices = lowercase.concat(uppercase)
  }
  else if (pickedLowercaseLetters && pickedNumbers) {
    confirmChoices = lowercase.concat(number)
  }
  else if(pickedLowercaseLetters && pickedSpecialCharacters) {
    confirmChoices = lowercase.concat(specialCharacters)
  }
  else if (pickedUppercaseLetters && pickedNumbers) {
    confirmChoices = uppercase.concat(number)
  }
  else if (pickedUppercaseLetters && pickedSpecialCharacters) {
    confirmChoices = uppercase.concat(specialCharacters)
  }
  else if (pickedNumbers && pickedSpecialCharacters) {
    confirmChoices = number.concat(specialCharacters)
  }

  var password = [];

  for (var i=0; i < passwordLength; i++) {
    var completedChoices = confirmChoices[Math.floor(Math.random() * confirmChoices.length)];
    password.push(completedChoices); 
  };

  return password;

};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  //return password;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
