//#region 
//  getter = special method that makes a property readable
//  setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property
class Calculate {

    constructor(width, height){
        this.width = width;
        this.height = height
    }
    // <-- To apply validation for these fields we use setter & getter -->
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth // _width = refers to private property (different with standard property width)
        }else{
            console.error(`Width must be a positive number`)
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight // _height = refers to private property (different with standard property height)
        }else{
            console.error(`Height must be a positive number`)
        }
    }

    get width(){
        return this._width
    }
    get height(){
        return this._height
    }
    get area(){
        return `${(this._width* this._height).toFixed(1)}cm^2`
    }
}

const cal = new Calculate(-100000,"roti")
console.log(cal.width) // -100000
console.log(cal.height) // roti 
console.log(cal.area)

// Example
class Person{
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age
    }
    set fName(newfName){
        if(typeof newfName === "string" && newfName.length > 0){
            this._fName = newfName
        }else{
            console.error(`First name must be a non-empty string`)
        }
    }
    set lName(newlName){
        if(typeof newlName === "string" && newlName.length > 0 ){
            this._lName = newlName
        }else{
            console.error(`Last name must be a non-empty string`)
        }    
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge
    }else{
    console.error(`Age must be a non-negative value`)
    }
    }
    get fName(){
        return this._fName
    }
    get lName(){
        return this._lName
    }
    get age(){
        return this._age
    }
}
const person1 = new Person(23,-65,"young")
console.log(person1.fName)  // undefined
const person2 = new Person("chaitra","M",25)
console.log(person2.fName) // chaitra
//#endregion

//#region -- destructuring = extract values from array and objects, then assign them to variables in a 
//                           convenient way.
//                           [] -> to perform array destructuring
//                           {} -> to perform object destructuring

// --- EXAMPLE 1 (SWAP THE VALUE OF 2 VARIABLES) ---
let a = 2;
let b = 1;

[a, b] = [b, a] ;// LHS = destructuring 
                //  RHS = creating new object
console.log(a) // 1
console.log(b) // 2

// --- EXAMPLE 2 (SWAP 2 ELEMENTS IN AN ARRAY) ---
let colors =["blue", "green", "yellow", "red", "pink"];

[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(colors) // ["pink", "green", "yellow", "red","blue"]

// --- EXAMPLE 3 (ASSIGN ARRAY ELEMENTS TO VARIABLES) ---
let fruits = ["apple", "gova", "orange", "mango","pineapple"];
const [firstFruit, secondFruit, thirdFruit, ...extrafruits] = fruits
console.log(firstFruit) // apple
console.log(thirdFruit) // orange
console.log(extrafruits) // ["mango","pineapple"]]

// --- EXAMPLE 4 (EXTRACT VALUES FROM OBJECTS) ---
const person4 = {
    fName : "chaitra",
    lName : "M",
    age : 25,
    employeed : true
}
const person5 = {
    fName : "Srikanth",
    lName : "M",
    age : 21,
}
const {fName, lName, age, employeed} = person4
console.log(fName)

// --- EXAMPLE 5 (DESTRUCTURE IN FUNCTION PARAMETERS) ---
function display({fName, lName, age, employeed = false}){
console.log(`name : ${fName} ${lName}`)
console.log(`age:${age}`)
console.log(`employeed: ${employeed}`)
}
display(person5)
//#endregion 

//#region -- nested object = Objects inside other objects
//                           Allows you to represent more complex data structure
//                           child object is enclosed by parent object
//                        
//                            Person{Address{}, contactInfo{}}
//                            ShopingCart{keyboard{}, Mouse{}, Monitor{}}

class Human{
    constructor(name, age, ...address){
        this.name = name,
        this.age = age,
        this.address = new Address(...address)
    }
}
class Address{
    constructor(street, city, country){
        this.street = street,
        this.city = city,
        this.country = country
    }
}
const person6 = new Human("Chaitra M",25,
                                          "Gandhi Colony", 
                                          "Raichur", 
                                          "India")
const person7= new Human("Nagamma",50,
                                        "Eklaspur", 
                                        "Dallas", 
                                        "USA")
console.log(person6.name)  // Chaitra M
console.log(person6.address.city) // Raichur
console.log(person7.age) // 50
console.log(person7.address.country) // USA
//#endregion

//#region --- Array of objects
const fruitsArray = [{name : "apple", color: "red", calories: 85},
                    {name : "banana", color: "yellow", calories: 65},
                    {name : "watermelon", color: "green", calories: 70},
                    {name : "grapes", color: "green", calories: 78},
                    {name : "orange", color: "orange", calories: 90}];

console.log(fruitsArray[0].name) // apple
fruitsArray.push({name : "gova", color: "white", calories: 75});
console.log(fruitsArray);    //[{},{},{},{},{},{}]
fruitsArray.pop()
console.log(fruitsArray) // [{},{},{},{},{}]
fruitsArray.splice(1,2)
console.log(fruitsArray) // [{apple},{grapes},{orange}]

// --------------- forEach() ------------------
fruitsArray.forEach(element => console.log(element))
fruitsArray.forEach(element => console.log(element.color))

// --------------- map() ------------------
const fruitsName = fruitsArray.map((element) => element.name )
console.log(fruitsName)

// --------------- filter() ------------------
const fruitscolor = fruitsArray.filter((element) => element.color  === "green")
console.log(fruitscolor)

// --------------- reduce() ------------------
const maxCalorieFruit = fruitsArray.reduce((accumulator, element) => 
                                            element.calories > accumulator.calories ? 
                                            element : accumulator)
console.log(maxCalorieFruit) // {orange}
//#endregion

//#region --- sort()= method used to sort elements of an array in place.
//                    Sorts elements as strings in lexicographic order, not alphabetical
//                    lexicorgraphic = (alphabet + numbers + symbols) as strings
let sports = ["cricket", "hockey", "chess", "batmitan", "volleyball"]

sports.sort();
console.log(sports) // [ "batmitan","chess","cricket","hockey","volleyball"]

//#endregion