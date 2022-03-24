// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = ['Please specify the length of your password from 8 to 128: ', 'Do you want to include lowercase in your password? ', 'Do you want to include uppercase in your password?', 'Do you want to include numbers in your password?', 'Do you want to include special characters in your password?'];
var passwordLength;
var lowerCase = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
var upperCase = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
var numerics = '0 1 2 3 4 5 6 7 8 9';
var specialCharacter = '! # $ % ( ) * + , - . / : ; < = > ? @ [ ] ^ _ ` { | } ~ &';
var arrayGeneral = ''; 
var passwordGenerated = '';
var generateLowerCase = false;
var generateUpperCase = false;
var generateNumerics = false;
var generateSpecialCharacter = false;

function generatePassword(){

  var passwordCriteria = ['Please specify the length of your password from 8 to 128: ', 'Do you want to include lowercase in your password? ', 'Do you want to include uppercase in your password?', 'Do you want to include numbers in your password?', 'Do you want to include special characters in your password?'];
  var passwordLength;
  var lowerCase = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
  var upperCase = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  var numerics = '0 1 2 3 4 5 6 7 8 9';
  var specialCharacter = '! # $ % ( ) * + , - . / : ; < = > ? @ [ ] ^ _ ` { | } ~ &';
  var arrayGeneral = ''; 
  var passwordGenerated = '';
  var generateLowerCase = false;
  var generateUpperCase = false;
  var generateNumerics = false;
  var generateSpecialCharacter = false;

  passwordLength = parseInt(prompt(passwordCriteria[0]));

  if(passwordLength >= 8 && passwordLength <= 128){
  
  generateLowerCase = confirm(passwordCriteria[1]);
  if(generateLowerCase){
    arrayGeneral += lowerCase + ' ';
  }else{
    arrayGeneral = arrayGeneral;
  }
  
  generateUpperCase = confirm(passwordCriteria[2]);
  if(generateUpperCase){
    arrayGeneral += upperCase + ' ';
  }else{
    arrayGeneral = arrayGeneral;
  }

  generateNumerics = confirm(passwordCriteria[3]);
  if(generateNumerics){
    arrayGeneral += numerics + ' ';
  }else{
    arrayGeneral = arrayGeneral;
  }

  generateSpecialCharacter = confirm(passwordCriteria[4]);
  if(generateSpecialCharacter){
    arrayGeneral += specialCharacter + ' ';
  }else{
    arrayGeneral = arrayGeneral;
  }

  arrayGeneral = arrayGeneral.trim();
  arrayGeneral = arrayGeneral.split(' ');

  
    
  for(var i = 0; i < passwordLength; i++){

    passwordGenerated += arrayGeneral[Math.floor(Math.random() * arrayGeneral.length)];

  }

  return passwordGenerated;

    }else{
      alert('you have been submitted a wrong parameter, please submit a length password betwen 8 to 128');
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
