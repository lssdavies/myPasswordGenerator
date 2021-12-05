// Assignment code here
//Declaring variables/arrays to store potential password characters and password length
var specialCharacters = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '\\', '|', '[', ']', '{', '}', ';', ':', "'", '"', '/', '?', '<', '>', '.', ','];

var numbericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L' ,'M' ,'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Declaring blank variable to store user selected characters to be used in password
var selectedCharacterOptions = [];

var passwordLength = 0;   
 
//Function to be called in generatePassword() to vailidate user input for number of characters in password. 
var totalCharacters = function() {

    //changing user input from string to int
    var numberOfCharacters = parseInt(window.prompt("How many characters would you like your password to contain?"));

    //conitional statement to check user inputs a value if not ask for inp again
    if (numberOfCharacters === "" || numberOfCharacters === null){
        window.alert("Please enter a valid number");
        return totalCharacters();
    }
    //conditional statement to check if entered value is a number if not ask for input again
    if (Number.isNaN(numberOfCharacters)){
        window.alert("Please enter a valid number");
        return totalCharacters();
    }
    //conditional statement to check if entered value is a number within range if not ask for input again
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        window.alert("Password length must be between 8 and 128 character.");
        return totalCharacters();
    }
    else {
    passwordLength = numberOfCharacters;
    console.log(passwordLength);
    }    
}

//function to capture user input determine character types to construct password
var userSelectedCharacters = function() {
    //user confirms if they will like special characters in the password
    var useSpecialCharacters = window.confirm("Please confirm if to include special characters")
    if (useSpecialCharacters)   {
        console.log("User chose to use special characters in the password");
        for (i=0; i < specialCharacters.length; i++)    {
            selectedCharacterOptions.push(specialCharacters[i]);
        }
        
        console.log(selectedCharacterOptions);
    }
    else{
        console.log("User chose not to use special characters in the password");
        console.log(selectedCharacterOptions);
     }

    //user confirms if they will like numbers in the password
    var useNumbers = window.confirm("Please confirm if to include numbers")
    if (useNumbers)   {
        console.log("User chose to use numbers in the password");
        for (i=0; i < numbericalCharacters.length; i++)    {
            selectedCharacterOptions.push(numbericalCharacters[i]);
        }
        
        console.log(selectedCharacterOptions);
    }
    else{
        console.log("User chose not to use numbers in the password");
        console.log(selectedCharacterOptions);
     }

     //user confirms if they will like uppercase letters in the password
    var useUpper = window.confirm("Please confirm if to include uppercase letters")
    if (useUpper)   {
        console.log("User chose to use uppercase letters in the password");
        for (i=0; i < upperCaseCharacters.length; i++)    {
            selectedCharacterOptions.push(upperCaseCharacters[i]);
        }
        
        console.log(selectedCharacterOptions);
    }
    else{
        console.log("User chose not to use uppercase in the password");
        console.log(selectedCharacterOptions);
     }
      //user confirms if they will like lowercase letters in the password
    var uselower = window.confirm("Please confirm if to include lowercase letters")
    if (uselower)   {
        console.log("User chose to use lowercase letters in the password");
        for (i=0; i < lowerCaseCharacters.length; i++)    {
            selectedCharacterOptions.push(lowerCaseCharacters[i]);
        }
        
        console.log(selectedCharacterOptions);
    }
    else{
        console.log("User chose not to use lowercase in the password");
        console.log(selectedCharacterOptions);
     }

}

var generatePassword = function ()  {
    totalCharacters();
    userSelectedCharacters();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);