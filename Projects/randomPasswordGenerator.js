
function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols ){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+"

    let allowedChars = ''
    let password = ''

//to concatinate the allowercharacters
    allowedChars += includeLowercase ? lowercaseChars : ''
    allowedChars += includeUppercase ? uppercaseChars : ''
    allowedChars += includeNumbers ? numbers : ''
    allowedChars += includeSymbols ? symbols : ''

    if(passwordLength <= 0){
        return ('Password length must be atleast 1')
    }
    if(allowedChars.length === 0){   // when all the boolean parameters are set to false which means, 
    //                                   if the boolean parameters are not set by user to true

    return('At least one set of character needs to be selected')
    }

    for(let i=0; i< passwordLength; i++){
       const randomIndex =  Math.floor(Math.random() * allowedChars.length)
       password += allowedChars[randomIndex]

      //  if(i == 0){
      //     for(let j = 0; j < numbers.length;i++){
      //       if(password[0]  === numbers[j]){
      //            // break;
      //       }
      //      //console.log(password[0])
      //    }
      //  // console.log(password[0])
      //  }
      
      }
      
    return password
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                 includeLowercase, 
                                 includeUppercase, 
                                 includeNumbers, 
                                 includeSymbols )

console.log('Generated Password is : ' + password)
