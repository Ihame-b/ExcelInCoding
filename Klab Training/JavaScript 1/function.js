// first function

// function myFunction(animalSound){
//     alert(animalSound)
// }
// myFunction("meow")

// "use strict"
// function summation(number1, number2, number3){
    
//     return number1*number2/number3
// }
// console.log(summation(10,18,2))

// exercise 1
// function remainder(firstInput,secondInput){
    
//     return firstInput%secondInput

// }

// console.log(remainder(firstInput = prompt("enter first input"), secondInput = prompt("enter secon input")))

// exercise 2
// function user(age,names,favoriteFood){
//     age = parseInt(prompt("enter your age"))
//     names = prompt("enter your name")
//     favoriteFood = prompt("enter your favorite food")

//     return `My name is ${names}, I have ${age} years old. My favourite Food is ${favoriteFood}.`
// }
// alert(user())

// fat arrow function


// const myFunction = (fname, lname, age, currentYear)=>{
//     fname = prompt("enter your first name")
//     lname = prompt("enter your last name")
//     age = parseInt(prompt("enter your age"))
//     currentYear = parseInt(prompt("enter the current year"))

//     let born = currentYear - age;
//     let retirement = 65 - age;

// return `My name is ${fname} ${lname}, we are now in ${currentYear}, i was born in ${born}, i am ${age} years old. i will reire in ${retirement} year`
// }

// console.log(myFunction())

// let person = {
//     firstName : "Kata",
//     lastName :"Ari",
//     age : 35,
//     nationality : "Burundian",
//     friens : [kevin, paul, james]


// }

// console.log(person)
// console.log(person.firstName)
// console.log(person['lastName'])

// how to print out an object

// let cynthia={
//     firstName:'Katagaruka',
//     lastName:'Aristide',
//     birthYear:1996,
//     job:'Student',
//     friends:['Pendo','Alpha','Nicole'],
//     hasDriversLicense:true,
//     calcAge:function(){
//     console.log(this)
//     return 2021-this.birthYear
//     }
// }
// console.log(`${cynthia.firstName}`)

// Object Methods

// let cynthia={
//     firstName:'KAYITARE',
//     lastName:'Cynthia',
//     birthYear:1905,
//     job:'Teacher',
//     friends:['Pendo','Alpha','Nicole'],
//     hasDriversLicense:true,
//     calcAge:function(){
//         let ages = 2021 - this.ages
//     return ages
//     }
//     }
//     console.log(cynthia)

// let cynthia={
//     firstName:'KAYITARE',
//     lastName:'Cynthia',
//     birthYear:1905,
//     job:'Teacher',friends:['Pendo','Alpha','Nicole'],
//     hasDriversLicense:true,
//     calcAge:function(){
//         return 2021-this.birthYear
//         },

//     getSummary:function(){
//         return `${this.firstName} has ${this.calcAge()}, she has ${this.hasDriversLicense?'a':"no"} driving license`
//     }
//     }
//     console.log(cynthia.getSummary());

// for loop

// "use strict"
// for(let rep =0; rep<=100; rep=rep+20){
//     console.log(`${rep}`)
// }
// fo loop for type of

// "use strict"
// let aris =[
//     'kataga',
//     'aristide',
//      27,
//      ['Alpha', 'Nicole', 'Pedro'],
//      true
// ]
// const type = [];

// for(let i =0; i<=aris.length; i++){
//     console.log(aris[i])
//     type.push(typeof aris[i])
    
// }
// console.log(type)

// to print out a type of string only

// "use strict"
// let aris =[
//     'katagaruka',
//     'aristide',
//      27,
//      ['Alpha', 'Nicole', 'Pedro'],
//      true,
//      127
// ]
// const type = []
// for(let i=0; i<aris.length; i++){
//     if(typeof aris[i] !== "string")
//         continue
//     type.push(aris[i]) 
    
// }
// console.log(type)

let number =[1,2,3,4,5,6,7,8,9,10]
const dividedByTwo= []
for(let i=0; i<number.length; i++){
    if (number[i]%3 !== 0){
        continue
    }

    dividedByTwo.push(number[i])

}
console.log(dividedByTwo)















