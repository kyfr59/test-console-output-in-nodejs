function go () {
  var text = 'Here is the output !'
  console.log(text) // Print the output in console
  return text // Return text (needed for testing)
}

go() // Call go() for output in console

module.exports = { go } // Exports go() for testing purpose
