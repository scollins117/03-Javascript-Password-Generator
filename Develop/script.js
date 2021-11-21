// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables of possible characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHJIJLMNOPQRSTUVWXYZ";
var number = "1234567890";
var specialChar = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength;
var passwordUpper;
var passwordNumber;
var passwordSpecial;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// create password
function generatePassword() {
  userPassword = "";
  passwordChar = "";

  // get variables from functions
  var len = confirmLength();

  var isUpper = confirmUpper();

  var isLower = confirmLower();

  var isNumber = confirmNumber();

  var isSpecial = confirmSpecial();

  // if statements to determine what characters to include in password
  if(isUpper) {
    passwordChar += upperCase;
  }

  if(isLower) {
    passwordChar += lowerCase;
  }

  if(isNumber) {
    passwordChar += number;
  }

  if(isSpecial) {
    passwordChar += specialChar;
  }

  // make sure at least one selection is made
  if(isUpper === false && isLower === false && isNumber === false && isSpecial === false) {
    window.alert("You must select at least one option.");
    generatePassword();
  }
  
  // concatenate password and randomize
  for(var i = 0; i < len; i++) {
    userPassword += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }

  return userPassword;
}

// ask user for length of password
var confirmLength = function() {
  var passwordLength = window.prompt("Please select a password length between 8 and 128");

  // confirm password is between 8 and 128 characters
  if(passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128.");

    // if not prompt again
    return confirmLength();
  }

  return passwordLength;
} 

// ask user if password will include uppercase letters
var confirmUpper = function() {
  var passwordUpper = window.prompt("Include uppercase letters in your password: Yes or No?");
  passwordUpper = passwordUpper.toLowerCase();

    if(passwordUpper === "yes") {
      passwordUpper = true;
     
    } 
    
    else if(passwordUpper === "no") {
      passwordUpper = false;
      
    } else {
      window.alert('Please select "Yes" or "No".');
      return confirmUpper();
    }
    
    return passwordUpper;
}

// ask user if password will include lowercase letters
var confirmLower = function(){
  var passwordLower = window.prompt("Include lowercase letters in your password: Yes or No?");
  passwordLower = passwordLower.toLowerCase();

    if(passwordLower === "yes") {
      passwordLower = true;
      
    } 
  
    else if(passwordLower === "no") {
      passwordLower = false;
      
    } else {
      window.alert('Please select "Yes" or "No".');
      return confirmLower();
    }

    return passwordLower;
}

// ask user if password will include numbers
var confirmNumber = function(){
  var passwordNumber = window.prompt("Include numbers in your password: Yes or No?");
  passwordNumber = passwordNumber.toLowerCase();

    if(passwordNumber === "yes") {
      passwordNumber = true;
      
    } 
  
    else if(passwordNumber === "no") {
      passwordNumber = false;
      
    } else {
      window.alert('Please select "Yes" or "No".');
      return confirmNumber();
    }

    return passwordNumber;
}

// ask user if password will include special characters
var confirmSpecial = function(){
  var passwordSpecial = window.prompt("Include special characters in your password: Yes or No?");
  passwordSpecial = passwordSpecial.toLowerCase();

    if(passwordSpecial === "yes") {
      passwordSpecial = true;
      
    } 
  
    else if(passwordSpecial === "no") {
      passwordSpecial = false;
      
    } else {
      window.alert('Please select "Yes" or "No".');
      return confirmSpecial();
    }

    return passwordSpecial;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

