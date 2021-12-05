// Assignment code here
//Declaring variables/arrays to store potential password characters and password length
var specialCharacters = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '\\', '|', '[', ']', '{', '}', ';', ':', "'", '"', '/', '?', '<', '>', '.', ','];

var numbericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L' ,'M' ,'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Declaring blank variable/array to store user selected characters to be used in password
var selectedCharacterOptions = [];

//Declaring a blank variables/array to store randomly slected characters from selectedCharacterOptions
var randomCharacters = [];

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

//function includes to functions 1 to capture user input and the order to validate at least one charater type is selected
var userSelectedCharacters = function() {

    //This function captures user input
    var userInput = function()  {
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
    
    //this function validates that the user has slected at least one character type using a while loop
    var vaildateInput = function()  {
        while (selectedCharacterOptions.length === 0)   {
            window.alert("Please select at least one character type");
            userInput();
        }
    }
    userInput();
    vaildateInput();
}

//this function will randomly select characters from selectedCharacter array to contruct the password based on the length stored in var passwordLength
var randomCharacterSelection = function()   {

    //For loop to run through and select characters from selectedCharacterOptions based on passwordLength
    for (var i = 0; i < passwordLength; i++)    {
    //Using math methods to randomly generate index numbers based off selectedCharacterOptions.length
    var randomCharacter = selectedCharacterOptions[Math.floor(Math.random()*selectedCharacterOptions.length)];
    randomCharacters.push(randomCharacter);
    
    }
      
}

var generatePassword = function ()  {
    //this function run all the functions needed to accept and validate user inputs and generate password.
    totalCharacters();
    userSelectedCharacters();
    randomCharacterSelection();
    return randomCharacters.join('');
    
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   added line of code to reset global variables selectedCharacterOptions and randomCharacters to generate new password without refereshing the page
  if (selectedCharacterOptions.length != 0 || randomCharacters.lenght != 0 ) {
      selectedCharacterOptions = [];
      randomCharacters = [];
  } 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);