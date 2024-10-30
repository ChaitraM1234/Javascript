//#region -- Date object = Objects that contain values that represent dates and times
//                         These date objects can be changed and formatted

const date = new Date();
console.log(date) // Mon Oct 28 2024 15:31:24 GMT+0530 (India Standard Time)
console.log(date.getFullYear()) //2024
console.log(date.getDate()) //28
console.log(date.getMonth()) // 9

const date1 = new Date()
date1.setFullYear(2025)
date1.setMonth(8)
date1.setDate(8)
date1.setMinutes(3)
date1.setSeconds(5)
console.log(date1)

// Date(year, month, day, hour, minute, second, ms)
const coustmisedDate = new Date(2024, 0, 10, 13, 6, 4, 8 )
console.log(coustmisedDate)

//
const date3 = new Date("2024-10-13")
const date4 = new Date("2025-0-01")

if(date4 > date3){
    console.log("Happy New Year")
}else{
    console.log("Not a New Year")
}
//#endregion

//#region -- closure = A function defined inside of another function, the inner function has access to 
//                  the variables and scope of the outer function.
//                  Allow for private variables and state mintenance 
//                  Used frequently in - JS frameworks: React, Vue, Angular

function outer(){
    let message = "Hello Chaitra"

    function inner(){
      console.log(message)
    }
    inner(); // (or) return inner;
}
outer();

//
function increment(){
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`)
}
increment(); // Count increased to 1
increment(); // Count increased to 1
increment(); // Count increased to 1
increment(); // Count increased to 1

// ---------------EXAMPLE 1 -----------------
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count from createCounter increased to ${count}`)
    }
    function getCount(){
        return count;
    }
 return {increment,getCount}; // (or) return increment
}
const counter = createCounter();
counter.increment(); // Count from createCounter increased to 1
counter.increment(); // Count from createCounter increased to 2
counter.increment(); // Count from createCounter increased to 3
console.log(counter.count) // undefined
console.log(`The current count is ${counter.getCount()}`) // The current count is 3

// ---------------EXAMPLE 2 -----------------

// here the score can be assigned with any value, so for security it is enclosed within function
function createGame(){
    let score = 0;
    function increaseScore(points){
       score += points;
       console.log(`+${points}pts`)
    }
    function getScore(){
        return score;
     }
    function decreaseScore(points){
       score -= points
       console.log(`-${points}pts`)
    }
    return {increaseScore, decreaseScore, getScore}
}
const game = createGame();
game.increaseScore(3); // score = 0+3 = 3   || points = 3
game.decreaseScore(5);  //score = 3-5 = -2 || points = 5
game.increaseScore(4); // score = -2 + 4 = 2 || points = 4
console.log(`The final score is ${game.getScore()}pts`) // 2
//#endregion

//#region -- setTimeout() = function in javascript that allows you to schedule the execution of a function 
//                          after an amount of time (millisecond)
//                          Times are appropriate (varies based on the workload of the Javascript runtime env.)

//                          setTimeout(callback, delay);


// -------- Function DECLARATION -------------
function hello(){
    window.alert("Normal Hello Function")
}
setTimeout(hello, 3000)

// -------- Anamous Function -------------
setTimeout(function(){window.alert("Anamous Function")}, 3000)

// -------- Arrow Function -------------
setTimeout(()=>window.alert("Arrow Function"), 3000)

//   clearTimeout(timeoutId) = can cancel a timeout before it triggers

const timeoutId = setTimeout(()=> window.alert("To cancel the setTimeout"), 3000);
clearTimeout(timeoutId)
//#endregion