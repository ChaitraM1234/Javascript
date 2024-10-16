//#region -- CALLBACKS -- a function that is passed as an argument to another function

//             
//          used to handle asynchronous function
//          1. Reading a file
//          2. Network requests
//          3. Interacting with data base

/* CALLBACK is a function that is passed as an argument to another function, used to handle asynchronous operations
(operations that may take variable amount of time such as reading a file etc. were not exactly sure when these
 processes are going to complete) but by using callback we can ensure that a function executes after these 
 processes are complete and not before accidentally */


// Its like -- "Hey, when you're done, call this next."

//scenario 1  --> here, goodBye() is called after hello()
hello()
goodBye()

function hello(){
    console.log("Hello!")
}

function goodBye(){
    console.log("goodBye!")

}

//scenario 2 --> here, the goodBye1() is executed before hello1(), bcz the setTimeout() will delay the execution of hello1
hello1()
goodBye1()

function hello1(){
    setTimeout(function(){
        console.log("Hello 1!")
    }, 3000); 
}

function goodBye1(){
    console.log("goodBye 1!")
}

//scenario 3 --> here, after executing the hello() function the callback function i.e, goodBye function is executed
hello2(goodBye2)

function hello2(callback){
        console.log("Hello 2 !")
    callback()
}

function goodBye2(){
    console.log("goodBye 2 !")
}

// example of callback
sum(displaySumRes, 5, 8)

function sum(callback, x, y){
    let result = x + y
    callback(result)
}
function displaySumRes(result){
    console.log(result)
}
//#endregion


//#region -- forEach() = a method used to iterate over the Elements of an array and apply a specified 
//                     function(callback) to each element

//                       array.forDEach(callback)
//                       element, index, array are provided

let numbers = [1,5,7,8,9,0,3,2]

numbers.forEach(display)
function display(element){
    console.log(element)
}

numbers.forEach(double)
function double(element, index, array){
    console.log(array[index] = element * 2)
}

let fruitsList = ['apple', 'orange', 'banana', 'mango', 'chikko' ]

fruitsList.forEach(display)
function fruits(element){
    console.log(element)
}

fruitsList.forEach(upperCase)
function upperCase(element, index, array){
    console.log(array[index] = element.toUpperCase())
}

fruitsList.forEach(capitalize)
function capitalize(element, index, array){
   array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
  
}
function capitalize(element,index,array){
    console.log( array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
  
}
// function capitalize(element){
//     console.log( element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
  
// }    it is also possible

console.log(fruitsList)  //*** "In forEach the original elements will be changed were as not in map" */  
//#endregion

//#region -- map() = accepts a callback and applies that function to each element of an array, then return a new array
  
const numList = [2,4,6,8,0]
const squares = numList.map(square)
console.log(squares)
function square(element){
    return Math.pow(element,2)
}

const dates = ['2024-10-13','1999-10-13','2002-10-01','2005-11-08']
const FormatedDate = dates.map(dateFormater)
console.log(FormatedDate)
function dateFormater(element){
    const parts = element.split('-')
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}
//#endregion

//#region -- filter() = creates a new array by filtering out elements
let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let evenNums = numList.filter(isEven)
console.log(evenNums)   // [ 2, 4, 6, 8]
function isEven (element){
    return element % 2 === 0
}

const ages = [15, 24, 32, 27, 25, 7, 9]
let adults = ages.filter(isAdult)  // [ 24, 32, 27, 25]
function isAdult (element){
    return element >= 18
}
//#endregion

//#region -- .reduce() = reduce the elements of an array to a single value
let prices = [50, 1185, 690, 250, 500, 30]
const totalAmount = prices.reduce(sum)
console.log(`$${totalAmount.toFixed(2)}`)
function sum(accumulator, element){   //(previousElement, nextElement) (0, 50)--(50,1185)--(1235,690)---
    return accumulator + element
}

const maximum = prices.reduce(maximum)
console.log(maximum)  // 1185
function maximum(accumulator, element){
return Math.max(accumulator, element)
}
//#endregion

