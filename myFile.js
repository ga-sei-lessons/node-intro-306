// imported modules
const myModule = require("./myModule")
const favFoods = require("./favFoods")
// built in node module
const fs = require('fs')
// console.log(fs)
// fs.readFile('./story.txt', 'utf8', function(err, fileData) {
//     // handle the error
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(fileData)
//     }
// })

fs.open("./story.txt", "a", function(err, fileData) {
    if (err) {
        console.log('file open error', err)
    }
    console.log(fileData)
    fs.write(fileData, "\nAnd then Gabe said Wimmy Wam Wam Wozzle!", function(err, bytesWritten) {
        if(err) {
            console.log('file write error:', err)
        }
        console.log('bytes:', bytesWritten)
    })
})

// console.log(favFoods)
// favFoods.myFavFoods.forEach(food => console.log(food))

// console.log(myModule)
// myModule.sayHello()

// console.log(myModule.randomRange(100))

// const fruits = ['pear', 'apple', 'mango', 'watermelon', 'kiwi']

// fruits.forEach(fruit => console.log(fruit))
 
// document.querySelector()
// window.fetch()

// 
// setInterval(() => {
//     console.log('bang')
// }, 1000)