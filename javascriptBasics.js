const courseName = "Javascript Backend Online Bootcamp";
const courseDate = new Date();
const studCnt = 3;

//const courseName = "Javascript Backend Online Bootcamp";
//let courseDate = new Date();
//let studCnt = 3;

function concept (courseName, courseDate, studCnt){
    var strConcat = courseName + " course started on " + courseDate + "has totally "+ studCnt + " students";
    console.log(strConcat);
}
function concept1 (courseName, courseDate, studCnt){
    return ( courseName + " course started on " + courseDate + "has totally "+ studCnt + " students");
}
//Named Function  - right hand side part is called anonymous function since no function name
var concept2 = function (courseName, courseDate, studCnt){
    return ( courseName + " course started on " + courseDate + "has totally "+ studCnt + " students");
};
//Arrow function
const concept3  = (courseName, courseDate, studCnt) => {
    return ( courseName + " course started on " + courseDate + "has totally "+ studCnt + " students");
}

// No need of return statement if only one statement after arrow curly braces
const concept4  = (courseName, courseDate, studCnt) => 
    ( courseName + " course started on " + courseDate + "has totally "+ studCnt + " students");

const mul = (a, b) => {
    return (a * b) ;
}
// No need of return statement if only one statement after arrow curly braces
const mul1 = (a, b) =>  (a * b) ;
// No need of brackets for parameters if its a single parameter by default it assume parameter
const mul2 = (a) =>  (a * 2) ;
// if No parameters then empty paranthesis is needed 
const mul3 = () => (3*2);
const mul4 = () => {
    return "hello";
};


concept(courseName, courseDate, studCnt);
console.log(concept1(courseName, courseDate, studCnt));
console.log(concept2(courseName, courseDate, studCnt));
console.log(concept3(courseName, courseDate, studCnt));
console.log(concept4(courseName, courseDate, studCnt));
console.log(mul(3,2));
console.log(mul1(3,2));
console.log(mul2(3));
console.log(mul3());
console.log(mul4());

//Working with Objects(key/value pair), Properties(or fields), Methods
const obj = {
    name : "Gayathri",
    companies : ['A', 'B', 'C', 'D'],
    meth: () => {
        console.log("Hello"+ this.name); //this refers to global node scope
    },
    meth1: function() {
        console.log("Hello"+ this.name); //this refers to the current objects surrounding scope
    },
    meth2() {
        console.log("Hello"+ this.name); //this refers to the current objects surrounding scope
    }
}

obj.meth();
obj.meth1();
obj.meth2();

//Arrays and Array Methods
let countries = ['India', 'Cannada', 'United States','United Kingdom'];
let employee = {name : "Neha", id: 1 , contract : false}
for (var i= 0; i < countries.length; i++){
    console.log(countries[i]);
}
console.log(countries);
//var or let keyword both the same meaning
for (var idx in countries){
    console.log(idx);
}
//var or let keyword both the same meaning
for (let country of countries){
    console.log(country);
}
countries.push("Singapore");//Array Method
console.log(countries);
countries.pop("Singapore");//Array Method
console.log(countries);

// Array method map takes function as an argument and returns a new array or new copy of the array
countries.map(country => {
    return 'Country: '+country;
});
console.log(countries);
countries.map(country => 'Country: '+country);
console.log(countries);
//Const behaves the same way as let but
//Constant Object or Array cannot be reassigned it will throw error if u reassign
countries = ['Ireland','Australia'];
console.log(countries);
employee = {name : "Nyra", id: 2 , contract : true}
console.log(employee);

//Redeclaring or reassigning an existing var or let or const variable to a another const variable, 
//in the same scope, or in the same block, is not allowed:
/*
var x = 2;
let x = 3; // Not Allowed
var x = 5; // Allowed 
let x = 8; // Not Allowed
const x = 6 // Not allowed
//console.log(x);
const y = 3;
const y = 9;//Not Allowed
//const variables must be assigned a value when they are declared
const z ; //Not allowed
const z = 1;
*/

//Before ES2015 or ES6 only Global and Function scope was there 
//but now there is also block scope concept is introduced
//Redeclaring a variable inside a block will not redeclare the variable outside the block
var  j = 10;
// Here x is 10
{  
  //var j = 2;
  // Here x is 2
  //let j = 3
  const j = 4
}
// Here x is 2
console.log(j);

//Arrays, Objects and Primitive Types
const employee1 = {name : "Nyra", id: 2 , 
contract : true, 
projects: ["project1", "project2"]};


const newEmployee = employee1;
newEmployee.name = "Neha";
//you never copied the employee object itself to newEmployee. You only copied the pointer! 
//It still points to the same address in memory as old pointer. so any change to employee
// or newEmployee will change its original value too
console.log(employee1);

//Copy the old object and its properties to new object
const newEmployee1 = Object.assign({}, employee1)
newEmployee1.name = "Adira";
newEmployee1.projects.push("project3"); 
console.log(employee1);
console.log(newEmployee1);
// 2nd way is Spread Operator which copies the old Object to new object
const newEmployee2 = {...employee1};
newEmployee2.name = "Anya";
newEmployee2.projects=[...employee1.projects]; //{...employee1.projects} for objects
newEmployee2.projects.push("projects4");
console.log(employee1);
console.log(newEmployee2);

const roles = ["Software Developer", "Senior Associate", "Manager", "Tester"];
let roles1 = roles; 
roles1.push("CEO");
console.log(roles);
console.log(roles1);
//let roles1 = [roles]; // will not copy the contents it will create nested array as [["tester", "CEO"]]
roles2 = roles.slice(); // 1st way of creating a new array by copying only its contents
roles2.push("HR Manager");
console.log(roles);
console.log(roles2);
// 2nd way of creating a new array by copying only its content and ponting to new memory location
roles3 = [...roles] ;//spread operator is used to pull objects/properties/fields form an array or object
roles3.push("CTO"); 
console.log(roles);
console.log(roles3);

//Rest operator is used to merge arguments in a function
const restEg = (param1, param2, param3) => {
    return [param1, param2, param3];
};
console.log(restEg(1, 2, 3)); //only 3 parameters can be passed
console.log(restEg(1, 2, 3, 4, 5));
const restEg1 = (...param) => {
    return param;
};
console.log(restEg1(1, 2, 3, 4, 5));

//Object destructuring

const employeeDestructure = {name : "Nyra", id: 2 , 
isContract : true, 
projects: ["project1", "project2"]
};
const normal = (emp) => {
console.log(emp.name);
}
normal(employeeDestructure);
const destructure = ({name, projects}) => {
    console.log(name, projects);
}
destructure(employeeDestructure);
// only for destructing left side curly brackets can be used. no where else in 
// variable declaration it can be used
const {name, projects, isContract} = employeeDestructure;
console.log(name, projects, isContract);
//function destructuring
testFunc= () => {
    return {Name: "Nyraa",
            ID: 4,
            IsContract : true
      };
   }
let {Name, ID, IsContract} = testFunc();
console.log(Name, ID, IsContract);
//Array destructuring
const arr = ["USA", "UK", "India"];
const [arr1, arr2] = arr;
const [Arr1, Arr2, Arr3] = arr;
console.log(arr1, arr2);
console.log(Arr1, Arr2, Arr3);
// Array destructuring can take any names where as Object destructuring should take same 
//field/property name which is already defined.

//Template literals

const empname = "Nyra";
const role = "Sofware developer";
console.log(`My name is ${empname} and I am a ${role}.`);

const empname1 = "Nyra";
const role1 = "Sofware developer";
console.log("My name is " + empname1 + " and I am a " + role1 + ".");

//Basics end
