
const { expect } = require('../support/TestUtils');
const templateParser = require('../..');

describe('NodeChildProcessTemplateParser unit tests', () => {

  it('command with no arguments', () => {
    expect(templateParser.parse('one', 'two')).to.eql('');
  });

});
