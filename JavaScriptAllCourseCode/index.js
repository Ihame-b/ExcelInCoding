//document.getElementById("D2").style.display="none";//use block in order to come back
//document.getElementById("demo1").style.display="none";
// let country="RWANDA";
// let continent="AFRICA";
// let population=12000000;
// console.log("my country is:"+country+", my continent is:"+continent+", my population is:"+population);
// //let round=population.toFixed(); //it help to remove anwonted zeros after .
// let firstName="ihame";
// let lastName="gilbert";
// let age=23;
// console.log("My Name is "+firstName+" "+lastName+"I have "+age+" years old!");
// console.log("Bibiliya iravuga ngo: \n\"ntugacire urubanza undi\"");
// console.log('Bibiliya iravuga ngo \n"ntugacire urubanza undi"');
// // average
// let geo=80,eco=50,hist=70;
// let sum=geo+eco+hist;
// let average=sum/3;
// console.log("everage of 80,50,70 is: "+average);
// // ineterminent form example
// let x=0,y=4;
// console.log(x/0);
// console.log(y/x);
// console.log(x/y);

// // method to londice
// let x1=18.987;
// console.log(x1+100);
// let i=x1.toFixed(2);
// console.log(i+100);
// let i2=x1.toString();
// console.log(i2+100);

// //scanner
// //let n1=parseInt(prompt("emter first number"));
// //console.log(n1);

// //assignment
// //let h,m1,h1,m,BMI1,BMI2;
// //let marks=prompt("enter your name:");
// //let john=prompt("enter your name");
// //h=parseInt(prompt("please enter your height of "+marks));
// //m=parseInt(prompt("enter your mass of "+marks));
// //BMI1=m/h*2;
// //h1=parseInt(prompt("please enter your height of "+john));
// //m1=parseInt(prompt("enter your mass of "+john));
// //BMI2=m1/h1*2;
// //if(BMI1>BMI2){
// //console.log("Data of "+marks+" weight is"+m+" and is "+h+" m tall.Data of "+john+" weight is"+m1+" and is "+h1+" m tall.");
// //}else{
// //    console.log();
// //}

// // else if
// let temp=parseInt('enter temperature');
// if(temp<15){
//    // console.log('do not forgot a jacket')
// }else if(temp<25){
// console.log('dont panic');
// }else{
//    // console.log("keep cool today");
// }
// // boolean explession
// let a=parseInt(prompt('enter year'));
// let b=parseInt(prompt('enter year'));
// if (a>=18 && b>=18) {
//     console.log("you have age to drive a car");
// } else {
//     console.log("you dont have age to drive a car ");
// }
// // exercises if else 
// let a=parseInt(prompt('enter marks of geography:'));
// let b=parseInt(prompt('enter marks of math:'));
// let c=parseInt(prompt('enter marks of economic:'));
// let d=parseInt(prompt('enter marks of history:'));
// let tot=(a+b+c+d)/4;
// console.log("Average is ",tot);

//     if(tot<=100 && tot>=80){
//         console.log("grade A ");
//     }

//     else if(tot<=79 && tot>=70){
//         console.log("grade B ");
//     }

//     else if(tot<=69 && tot>=60){
//         console.log("grade C ");
//     }

//    else if(tot<=59 && tot>=50){
//         console.log("grade D ");
//     }

//    else if(tot<=49){
//         console.log(" Fail ");
//     }

//     else if(tot>=101){
//         console.log("invalid marks");
//     }
//    else if(tot<=0){
//         console.log("invalid marks");
//      }
//     else{
//         console.log("invalid input");
//     }

    //switch case
    // let day=prompt(" please enter day ");
    // switch (day) {
    //     case 'manday':
    //         console.log("go to choir...");
    //         break;

    //         case 'tuesday':
    //         case 'wednesday':
    //         case 'thusday':
    //         case 'friday':
    //         console.log("go to school...");
    //         break;

    //         case 'saturday':
    //         console.log("go to church...");
    //         break;

    //         case 'saturday':
    //             console.log("go to school...");
    //             break;
    
    //     default:
    //         console.log("INVALID DAY");
    //         break;
    // }

// exercises 2
    // let date1=prompt("enter day");   
    // if(date1=='monday'){
    //     console.log("go to code...");
    //      }    
    //  else if(date1=='tuesday' || date1=='wednesday' || date1=='thusday' || date1=='friday'){   
    //          console.log(" go to school ");
    //         }
    //         else if(date1=="saturday"){
    //         console.log("go to relax");
    //         }
    //         else if(date1=="sunday"){
    //             console.log("go to church");
    //             }
    //             else{
    //                 console.log("INVALID INPUT");
    //             }

            //  // tanary condition
            //     let AGE=parseInt(prompt("please enter your age"));
            //     //let answer1 = AGE>=20 ? ' YOU CAN DRINK WIN... ' :(AGE<21 ? ' DRINK SODA!!!! ': 'GHZXHZX'// MORE THAN ONE IF ELSE
            //     let answer = AGE>=21 ? ' YOU CAN DRINK WIN... ' : ' DRINK WATER!!!! '
            //     console.log(answer);

            //    "use strict"   //is there to show us complicated error
            //     //about valiable
            //     let fname='ihame';
            //     fnames='taiger';
            //     console.log(fname);
            //     // about reserved keyword
            //     let interface=80;
            //     console.log(interface);

            //     //alert
            //     let myAlert=alert('DONT DRINK AND DRIVE');
            //     console.log(myAlert);

            //     //confirm
            //     let MYconfm=confirm("have you eat");
            //     console.log(MYconfm);
            //     console.log(typeof myAlert);
// let x,y;        
// let a=parseInt(prompt("enter number 1")),b=parseInt(prompt("enter number 2"));
// function divide(x,y) {
//     return x%y;
// }
// //let c=divide(a,b);
// //console.log(c);
// alert(divide(a,b));
      // function declaretion
// function info(name,age,food) {
//     name=prompt("enter your name ");
//     age=parseInt(prompt("enter your age"));
//     food=prompt("enter your food");
//     return `my name is ${name},I have ${age} I like to eat ${food}  `;
// }
// alert(info());

// function myYear(currentYear, birthYear) {
//     currentYear=parseInt(prompt("enter the current year"));
//     birthYear=parseInt(prompt("enter your birth year"));
//     result=currentYear-birthYear;
//     return result;
// }
// alert(myYear());

//function expression
// const myFunction = function myYear(currentYear, birthYear) {
//     currentYear=parseInt(prompt("enter the current year"));
//     birthYear=parseInt(prompt("enter your birth year"));
//     result=currentYear-birthYear;
//     return result;
// }
// alert(myFunction());

//fatArrow function
// const MyAge=birth => 2021-birth;
// const age1=MyAge(1998);
// alert(age1);

// const pansion=(fname,lname,age,currentYear) =>{
//     fname=prompt("enter your firstName");
//     lname=prompt("enter your lastName");
//     age=parseInt(prompt("enter your age"));
//     currentYear=parseInt(prompt("enter your current year"));
//     let bornYear=currentYear-age;
//     let retirementYear=65-age;
//     return `my name is ${fname} ${lname} we are now in ${currentYear} I am born in ${bornYear} you left ${retirementYear} for retirement`;
// }
// alert(pansion());
let myArray=["ihame",23,"gilbert", ["feli","claire","rwandan"],"rwandan"];
//console.log(myArray);
let fruit=["apple","orange","avoca"];
let x=[1,2,3,4,5];
let y=[1,2,3,4,5];
//x.pop();
//console.log(x);
 //alert(myArray.concat(fruit));
 //console.log(y==x);
//console.log(x.toString==y.toString);
copyArray=x;
copyArray.push(7);
//console.log(copyArray)

//Object
let personal={
fname: "ihame",
lname: "gilbert",
age:1998,
nationality: "rwandan",
friends: ["mabure","dan","keissa"],
calclAge: function() {
    let ages=2021-this.age;
    return ages;
},
Drivinglisense: false,

Dlicense: function() {
   return `${this.fname} has ${this.calclAge()}, and has ${this.Drivinglisense ? 'a' : 'no'} driving lisense...`
}
}
//console.log(personal);
//console.log(personal.fname);
//console.log(personal['fname']);
//let ask=prompt("which information do yo wont ? like \nfirstName\n lastName\n age\n nationality\n friends");
//chech input
//if (personal[ask]) {
 //   console.log(personal[ask]);
//}else{
   // console.log(" put valid input \nfirstName\n lastName\n age\n nationality\n friends");
//}
//console.log(`${personal.fname} have a ${personal.friends.length} and his best friend is ${personal.friends[2]}`);
//add element
// personal.location="rwanda";
// personal['email']="ihamegrbt@gmail.com";
// console.log(personal);
//ignore case
//this keyword
//console.log(personal.calclAge());
// checking boolean in class
// if (personal.Drivinglisense==true) {
//     console.log(`${personal.fname} have ${personal.calclAge()} and have a driving license`);
// } else {
//     console.log(`${personal.fname} have ${personal.calclAge()} and have no driving license`); 
// }
//colling licence field
//console.log(personal.Dlicense());
//for loop
"use strict"
for (let i =1; i<10; i++) {
 //   console.log(`lifting ${i}`);
}

const ihame=[
 "ihame",
 "gilbert",
  1998,
 "rwandan",
 ["mabure","dan","keissa"],
 true
]
//ihame.unshift("math");
//ihame.shift("gilbert");

//print element in array
for (let i = 0; i <= ihame.length; i++) {
    //console.log(ihame[i]);
}

//type of element in array
const type=[]
for (let i =0; i< ihame.length; i++) {
    type.push(typeof ihame[i]);
}
//console.log(type);

let x1=[1991,2000,2005,2010,2018];
const y1=[];
for (let i = 0; i < x1.length; i++) {
    y1.push(2021-x1[i]); 
}
//console.log(y1);

// continue
const type1=[];
for (let i = 0; i < ihame.length; i++) {
     if (typeof ihame[i] !== "string") 
     continue
     type1.push(ihame[i]); 
}
//console.log(type1);

// divisible by 3
let n=[1,2,3,4,5,6,7,8,9,10];
const p=[];
for (let i = 0; i <=n.length; i++) {
    if(n[i] % 3 !==0)
    continue//break
    p.push(n[i]);
}
console.log(p);
