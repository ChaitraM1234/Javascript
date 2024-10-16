



// Ternary operator  -->

let purchaseAmount = 125
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Your total is $${purchaseAmount - (purchaseAmount * discount/100)}`)

// String methods -->

let userName = "Nagamma"

userName.charAt(0)  // N
userName.indexOf("a")  // 1
userName.lastIndexOf("a")  // 3
userName.length // 7
userName.trim() // it will trim the white spaces
userName.repeat(3)  // NagammaNagammaNagamma
userName.toUpperCase //NAGAMMA
userName.toLowerCase //Nagamma
userName.startsWith(" ") // flase
userName.endsWith(" ") // flase
userName.includes(" ")  //false

let phoneNumber = "123-456-789"
phoneNumber.replaceAll("-","/") // 123/456/789
phoneNumber.padStart(15,"0") //0000123-456-789
phoneNumber.padEnd(15,"0") //123-456-7890000


// String Sclicing --->  string.slice(start,end)

const fullName = "Beerappa Narasamma"

fullName.slice(0,8) // Beerappa
fullName.slice(9,18)  // Narasamma

console.log(`FisrtChar is : ${fullName.slice(0,1)}` )  // B
console.log(`LastChar is : ${fullName.slice(-1)}` )  // a
console.log(`Last2Char is : ${fullName.slice(-2)}` )  // ma

console.log(fullName.slice(0, fullName.indexOf(" ")))  // Beerappa
console.log(fullName.slice(fullName.indexOf(" ") + 1 ))  // Narasamma


//#region  -- Method Chaining - calling one method after another in one continous line of code

let userName1 = window.prompt("Enter the name : ")   // c HaiTra

// -- NO METHOD CHAINING --

userName1 = userName1.trim();
console.log(userName1)

let userName1FirstChar = userName1.charAt(0)
userName1FirstChar = userName1FirstChar.toUpperCase()

let restChars = userName1.slice(1)
restChars = restChars.toLowerCase()

userName1 = userName1FirstChar + restChars

console.log(userName1)  // Chaitra

// -- METHOD CHAINING ---

userName1 = userName1.trim().charAt(0).toUpperCase() + userName1.trim().slice(1).toLowerCase()  // Chaitra

//#endregion 


//#region 

// = assignment operator
// == comparison operator (compare if values are equale)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14

if(PI == "3.14"){
    console.log("This is Pi")
}else{
    console.log("This is NOT Pi")
}  //This is Pi

if(PI === "3.14"){
    console.log("This is Pi")
}else{
    console.log("This is NOT Pi")
}//This is NOT Pi

//#endregion

//#region -- loops

// whileloop
let loggedIn = false;
let name;
let password;

while(!loggedIn){
    // name = window.prompt("Enter your Name")
    // password = window.prompt("Enter Password")

    if(name === "Chaitra M" && password === "Life@123"){
        loggedIn = true
        console.log("Your are loggedIn !!")
    }else{
        console.log("Invalid credentials!, Please try again..")
    }
}

// do while 
do{
    // name = window.prompt("Enter your Name")
    // password = window.prompt("Enter Password")

    if(name === "Chaitra M" && password === "Life@123"){
        loggedIn = true
        console.log("Your are loggedIn !!")
    }else{
        console.log("Invalid credentials!, Please try again..")
        
    }
}while(!loggedIn)

// for loop
for( let i = 0; i <= 5; i += 2){
   if(i == 2){
    continue; // it will skip that iteration  -- 1 3 4 5
   }else{
    console.log(i)
   }

   if(i == 4){
    break; // it will break the loop entierly  -- 1 2 3
   }else{
    console.log(i)
   }
}

//#endregion

//#region -- function --> A section of resuable code. Declare code once, use it whenever you want. 
//                        call the function to execute that code
//#endregion


//#region -- array --> a variable like structure that can hold more than 1 value

let fruits = ["apple", "mango", "banana"]

fruits.push("coconut") //a new item will be added to the last of array - ["apple", "mango", "banana","coconut"]
fruits.pop() //remove the last element  - ["apple", "mango"]
fruits.unshift("orange")  // will add the item in the beginig of array - ["orange","apple", "mango", "banana"]
fruits.shift() // remove the first element - ["mango", "banana"]
fruits.length // 3
fruits.indexOf("mango") // 1 
//#endregion


//#region -- spread operator --> ...allows an iterable such as an array or string to be expanded into seperate elements
//                            (unpacks the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers) // 5
let minimum = Math.min(...numbers) // 1

let fruit = ["apple", "orange", "banana"];
let vegetables = ["carrots","celery","potatoes"];

let foods = [...fruit,...vegetables] // it helps to combine arrays - ["apple", "orange", "banana","carrots","celery","potatoes"]

//#endregion


//#region -- rest parameters = (...rest) allow a function work with a variable number of arguments
//                                         by bundling them into an array

//                              spread = expands an array into seperate elements
//                              rest = bundles seperate elements into an array

function openFridge (...foods){
          console.log(foods) // chapati, rotti, rice
          console.log(...foods) //["chapati", "rotti", "rice"]
}

const food1 = "chapati"
const food2 = "rotti"
const food3 = "rice"

openFridge(food1,food2,food3)

//#endregion




