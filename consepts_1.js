//#region  -- function  1) function declaration = define a reusable block of code that performs a specific task

                                function hello(){
                                    console.log("Hello")
                                }
                                //hello()
                                setTimeout(hello,3000)

                                const num = [1,2,45,78,90,30,23]
                                const squareList_1 = num.map(square)
                                console.log(squareList_1)
                                function square(element){
                                    return Math.pow(element, 2)
                                }
                               
//                      2) function expressions = a way to define functions as values or variables (assigning a function to a variable)

//                          benifits - a. no need to keep on thinking function name
//                                     b. can perform function once and forget abt it

                                const hello1 = function(){
                                        console.log("Hello1")
                                }
                                //hello1()
                                setTimeout( function(){
                                    console.log("Hello1")
                                }, 3000)

                                const squareList_2 = num.map(function(element){
                                        return Math.pow(element, 2)
                                })
                                console.log(squareList_2)

//                       3) arrow function = a concise way to write function expressions good for simple functions 
//                                           that you use only once
//                                           (parameters) => some code
                                    
                                const hello2 = () => {
                                    console.log("Hello2")
                                }
                                //hello2();
                                setTimeout(()=>  console.log("Hello2"), 3000)

                                const squareList_3 = num.map((element) => Math.pow(element,2))
                                console.log(squareList_3)
                                             
//#endregion

//#region -- object = a collection of related properties and/or methods can represent real world 
//                    objects(people, products, places) 
//                      
//                     object = {key : value,
//                                     function()}

const person1 = {
    firstName : 'Chaitra',
    lastName : 'M',
    age : 24,
    isEmployed : false,
    sayHello : function(){ console.log('Hi!, I am chaitra')},
    sayBye : function(){ console.log('GoodBye!')} 
}

const person2 = {
    firstName : 'Chaitra',
    lastName : 'M',
    age : 25,
    isEmployed : true,
    sayCongrats : () => { console.log('Congratulations!, chaitra')},
}

person1.firstName // Chaitra
person1.sayHello() // Hi!, I am chaitra
person2.sayCongrats() // Congratulations!, chaitra
//#endregion

//#region -- this = reference to the object where THIS is used (the object depends on the immediate context)
//                  person.name = this.name
  
            const person3 = {
                firstName : 'Chaitra',
                lastName : 'M',
                age : 24,
                favFood : 'sweets',
            eat : function(){ console.log(`Hi!, ${this.firstName +' ' + this.lastName} likes to eat ${this.favFood}`)}
            }
            person3.eat()
            
            // ** THIS keyword dosen't work with arrow function, as it refers to window object **
            const person4 = {
                firstName : 'Chaitra',
                lastName : 'M',
                age : 24,
                favFood : 'sweets',
            eat : () =>{ console.log(`Hi!, ${this.firstName +' ' + this.lastName} likes to eat ${this.favFood}`)}
            }
            person3.eat() // Hi!,UNDEFINED UNDEFINED likes to eat UNDEFINED

            console.log(this) // here, this refers to window object
//#endregion

//#region -- constructor = special method for defining the properties and methods of object 
//                        - code reusability & many objects been created 
            
            function Car(make, model, year, color){   // Car = constructor
                this.make = make,
                this.model = model,
                this.year = year,
                this.color = color,
                this.drive = function(){console.log(`You drive the ${this.model}`)}
            }

            const car1 = new Car("Ford","Mustang", 2024, "gray") // object creaction
            const car2 = new Car("Chevrolet","Thar", 2025, "Black") // object creaction

            car1.make // Ford
            car1.model // Mustang
            car2.year //2025
            car2.color // Black
            car2.model // You drive the Thar
//#endregion  