var assert = require('chai').assert
var sinon = require('sinon')
sinon.stub(console, 'log') // Disable output in the test
var index = require('../index')

// Mocha Test Case
describe('Mocha Test Case', function () {
  it('Test console output', function (done) {
    assert.equal(index.go(), 'Here is the output !')
    done()
  })
})
