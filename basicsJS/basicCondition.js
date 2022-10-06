//define variables

let month = 'Jan'

if (month == 'april') {
    console.log('True') //stesp to execute when condition is true
} else {
    console.log('False') //steps to execute when condition is false
}

//if-elseif-else

if (month == 'april'){
    console.log('The moneth is: ' + month)
} else if (month == 'April'){
    console.log('The month is : ' + month)
} else 
console.log('Month is other then April: ' + month)

//using condition (ternary) operator
console.log((month == 'april') ? 'The month is: '+month : 'the month is other then april' + month)
