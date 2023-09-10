// Assignment code here

function isInt(input){
  return (
    !isNaN(input));
}//check if user input is a number

function generatePassword(){




var validInt = false;
while (!validInt){
  passLength = prompt("Input password Length between 8-128 characters:");

  if (isInt(passLength)){
    validInt = true;

  }
  else{
    console.log("Input is not an Integer, try again...");
  }

}
//check if inputted length is an integer
//get length of password


 lowercase = prompt("Include lowercase? (y/n)");
 uppercase = prompt("include uppercase? (y/n)");
 numeric = prompt("include numbers? (y/n)");
 specChar = prompt("include special characters? (y/n)");



 var lowChar; 
 var upChar;
 var numb; 
 var spec;

if (lowercase=="y"){;
lowChar = "abcdefghijklmnopqrstuvwxyz";
}
if (uppercase=="y"){
  upChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if(numeric=="y"){
  numb = "0123456789";
}
if (specChar == "y"){
  spec = "!\"§$%&/()=?\u{20ac}";
}


allChar = lowChar + upChar + numb + spec;
//add all characters to one string which then will be randomly selected from


while(true){

  try{
  password = "";

  for(var i=0; i < passLength; i++){
    password = password + allChar.charAt(Math.floor(Math.random() * allChar.length));
  }
  
  console.log("password: " + password);
}catch(error){
  console.log("Must choose to include at least one option for passoword to generate!")
  generatePassword();
}
//require one option for password generation

  try{
  for(var i = 0; i < spec.length; i++){
    if(password.includes(spec.charAt(i))){
      if((password.length < 8) || (password.length > 128)){
        console.log("Password must be between 8 and 128 characters long, try again... ");
        generatePassword();
      }
      return password;
    }
  } 
}catch(error){
  console.log("Password must contain a special character, try again:")
  console.error(error);
    generatePassword();
}

}
  console.log("No special character detected, restarting...");
  //check if password contains a special character and is between 8-128 else restart proccess 
}





//generates a password

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
