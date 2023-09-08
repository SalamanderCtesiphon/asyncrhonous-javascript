// CALLBACKS

// A callback function is a function passed into anouther function as an argument, which
// is then invoked inside of the outer function to complete some knd of routine or actio

myDiv.addEventListener("click", function () {
  // do something
})                    // this is a callback function

// Callback example

var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)