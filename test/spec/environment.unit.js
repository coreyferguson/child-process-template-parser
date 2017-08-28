
const { expect } = require('../support/TestUtils');

describe('environment unit tests', () => {

  it('mocha: `describe` and `it` keywords', () => {
    // no errors = pass
  });

  it('chai: `expect` keyword recognized', () => {
    expect(true).to.be.true;
    expect(true).to.not.be.false;
  });

});
