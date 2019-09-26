Test console output in NodeJS
=============

Trick to test the output of console in NodeJS.

In this example, I use [Mocha](https://mochajs.org/ "Mocha") to run the test :

`mocha test/index.js` (if the package Mocha is installed globally).

The trick is to put the code in a function and, in addition to print the string in the console, return the string from the function.

So, Mocha can get the string and test it.

```javascript
function go () {
  var text = 'Here is the output !'
  console.log(text) // Print the output in console
  return text // Return text (needed for testing)
}
```