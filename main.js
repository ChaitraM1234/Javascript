//#region  Nested functional scope
let a =10;

function outer (){
    let b = 20

    function inner (){
        let c = 30
        console.log(a,b,c)
    }

    inner()
}
outer()
//#endregion

//#region - Closure
function outer (){
 let count = 0

 function inner (){
    count++
    console.log(count)
 }
  return inner  // By this the inner function as the access to the outer scope also 
}

const fn = outer()
fn()    //1
fn()    //2
//#region 

//#region -- Curring

function sum (a,b,c){
    return a+b+c
}
function curry(fn) {
    return function(a) {
        return function(b){
            return function(c) {
                return fn(a,b,c)
            }
        }
    } 
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(5)(3))

// const add1 = sum(2)
// console.log(add1)
// const add2 = add1(5)
// console.log(add2)
// const add3 = add2(3)
// console.log(add3)
//#endregion

//#region -- this keyword

//-- Implicit Binding
const person = {
    name : 'chaitra',
    sayMyName : function () {
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName()
console.log(person.name,person.sayMyName)

//--Explicit Binding
const nameOfPerson = {
    fName : 'chaitra',
}
 function namePerson () {
    console.log(`My name is ${this.fName}`)
 }

 namePerson.call(nameOfPerson)
console.log(nameOfPerson.fName,nameOfPerson.namePerson)

 // -- New Binding

 function Student (id){
    this.rollNo = id //here this = {} (an empty object)
 }
 const s1 = new Student('01')
 const s2 = new Student('02')
 console.log(s1.rollNo,s2.rollNo)

 // -- Default Binding
 globalThis.name = 'Superman'
 sayMyName()


//#endregion

//#region -- Prototype

function Person1(fName,lName){
    this.fName = fName,
    this.lName = lName
}

const p1 = new Person1('chaitra','M')
const p2 = new Person1('Yuvaraj','B')
