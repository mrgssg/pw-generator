// creating variables to define in function

var specialChar = {bool: false, range:[33,47]};
var numberChar = {bool: false, range: [48,57]};
var upperChar = {bool: false, range: [65,58]};
var lowerChar = {bool: false, range: [97,122]};

// creating the functions to generate the password
function getPasswordCharacter(x) {
    return String.fromCharCode(x);
  }

function generatePassword () {
    var passLength = window.prompt('enter a number between 8-128');
    specialChar.bool = window.confirm('do you want special characters?');
    numberChar.bool = window.confirm('do you want numbers?');
    upperChar.bool = window.confirm('do you want uppercase letters?');
    lowerChar.bool = window.confirm('do  you want lowercase letters?') 
    var password = [];
    
    var pwChar = [specialChar, numberChar, upperChar, lowerChar]

    // these are the for loop and math statements
    // the math statement chooses random characters to generate the password based on the input from the user.
    // if & else statements indicate if necessary to add characters to pw

    for (i=0; i < passLength; ++i) {

        var rand = Math.floor(Math.random()*pwChar.length)
        if (pwChar[rand].bool) {
            var randCharIndex = Math.floor(Math.random()*(pwChar[rand].range[1]-pwChar[rand].range[0])+(pwChar[rand].range[0])); 
            password[i] = getPasswordCharacter(randCharIndex);
        }

        else {
            i = i - 1;
        }

// return the password upon completion
    }
    return password.join('')
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









  
