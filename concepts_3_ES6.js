//#region -- class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to 
//                    traditional constructor functions 
//                  ex. static keyword, encapsulation, inheritance

// Using -  traditional constructor functions
function Product(name, price){

    this.name = name,
    this.price = price
    this.displayProducts = function(){
        console.log(`Product: ${this.name}`)
        console.log(`price: $${this.price}`)
    }
    this.calculateTotal  = function(){
        return this.price + (this.price * saleTax)
    }
}

const saleTax = 0.05

const products1 = new Product("Lehenga",1500)
const products2 = new Product("Jeans",1300)

products1.displayProducts()
products2.displayProducts()

const totalAmt = products1.calculateTotal(saleTax);
console.log(`Total price (with tax) :$${totalAmt.toFixed(2)}`);

                      
// Using -  class
class Product1{
    constructor(name, price){
        this.name = name,
        this.price = price
    }
    //In class, no need to specify a function keyword to a function
    displayProducts(){
        console.log(`Product: ${this.name}`)
        console.log(`price: $${this.price}`)
    }
    calculateTotal(){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05

const product1 = new Product1("Lehenga",1500)
const product2 = new Product1("Jeans",1300)

product1.displayProducts()
product2.displayProducts()

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax) :$${total.toFixed(2)}`);
//#endregion

//#region -- Static = a keyword that defines properties or methods that belong to a class itself rather than the
//                     objects created from that class ( class owns anything static, not the objects)

class MathUtil{
    static PI =3.14;

    static getDiameter(radius){
        return radius * 2
    }

    static getArea(radius){
        return this.PI * radius * radius
    }
}
// to access the static properties, className is used
console.log(MathUtil.PI) 
console.log(MathUtil.getDiameter(5)) 
console.log(MathUtil.getArea(10)) 

// Example
class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++  // or (this.constructor.userCount++)
    }

    static getUserCount(){
         console.log(`There are ${this.userCount} users online`)

    }
}
const user1 = new User("Chaitra")
const user2 = new User("Shridhar")

console.log(user1.userName) // chaitra
console.log(user1.userCount) // undefined - bcz User dosen't have userCount has a property 
//                                            since it is static it belongs to class
console.log(User.userCount) // counts number of users
User.getUserCount()


/* ACCESSING STATIC PROPERTIES USING THIS:
 . In a static method, this refers to the class itself. Therefore, you can use this to access static properties 
   or methods.
 . In the MathUtil class, this.PI works correctly inside the static method getArea() because this refers to 
    MathUtil, which has the PI property. (or use MathUtil.PI)

 ISSUE WITH THE USER CLASS WHILE UPDATING THE USERCOUNT:
. The problem with the User class is how you update userCount inside the constructor. You used this.userCount++, 
  which refers to an instance property, not the static property.
. The correct way to increment the static userCount is to use the class name (User.userCount++) or 
  this.constructor.userCount++.*/

//#endregion

//#region -- inheritance = allows a new class to inherit properties and methods from an existing class
//                         ( parent --> child ) 
//                          helps with code reuseability

class Animal{
   static alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`) 
    }
}
class Rabbit extends Animal{
    name = "Rabbit"
}
class Fish extends Animal{
    name = "Fish"
}
class Elephant extends Animal{
    name = "Elephant"
}

const rabbit = new Rabbit()
const fish = new Fish()
const elephant = new Elephant()

console.log(Animal.alive) //true
console.log(rabbit.alive)  // undefined -- bcz, alive is static which belongs to only Animal class ( not inherited )
rabbit.eat() // This Rabbit is eating
rabbit.sleep() // This Rabbit is sleeping
//#endregion

//#region -- super = keyword is used in classes to call the constructor or access the properties and methods of a 
//                   parent (superclass)
//                          this= this object
//                          super = the parent

class Animal{
    constructor(){
        this.name = name;   // the common properties of child class are moved to parent class
         this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}km/sec`)
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
         super(name, age) // to access the parent class properties, super() is used before this keyword

           // this.name = name;
           // this.age = age;
            this.runSpeed = runSpeed
        }
        run(){
            console.log(`This ${this.name} can run`)
            super(this.runSpeed)
        }
}
class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age)  // --- to extended the properties of parent

        // this.name = name;
        // this.age = age;
        this.swimSpeed = swimSpeed
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super(this.swimSpeed)   // --- to extended the methods of parent
    }
}
class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age) 
        // this.name = name;
        // this.age = age;
        this.flySpeed = flySpeed
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super(this.flySpeed)
    }
}

const rabbit1 = new Rabbit("rabbit", 1, 25);
rabbit1.run() // This Raddit can run
              // The Raddit moves at a speed of 25km/sec

//#endregion