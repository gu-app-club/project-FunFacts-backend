const util = require('./util.js') // This is code we wrote
const express = require('express') // This is code someone else wrote
const app = express()

/**
 * NOTE! I've written a function for you that gets a random element
 * in an array! To use it, you can do:
 *
 * var item = util.pickRandom(myArray)
 */

function getFunFact(request, response) {
  response.send({
    fact: "//todo I'm something sent back!"
  })
}

app.get('/fun-fact', getFunFact)

app.listen(3000, function() {
  console.log("Our server is listening to localhost:3000")
})
