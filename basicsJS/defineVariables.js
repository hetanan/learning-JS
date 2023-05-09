//examples of defining variables in JS

//single line comment

/* multiple
line comment */

/*var is old way of defining variables
let is new way of defining variables introduced in ES6

variable declared with let within {} block can NOT be accessed outside 
where as variable declared with var can be accessed outside */

let firstName = 'John'
console.log ('First name is: ' + firstName) //print on console

let familyName = 'Smith'
familyName = 'Test' //reassign value of variable
console.log('Family name is: ' + familyName) //this will print Test as variable is reassigned new value in line 18

{
    let age = 30
}
console.log(age) //this will throw error as age is defined within {} block

{
    var age = 30
}
console.log(age) //this will print 30 as age is defined with var

//to define constant variable use const

const abc = 10
console.log(abc) //this will print 10   

//to know about type of variable use typeof
console.log(typeof abc) //this will print number