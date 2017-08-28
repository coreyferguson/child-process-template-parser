
const path = require('path');
const templateParser = require('../..');
const { expect } = require('../support/TestUtils');

describe('NodeChildProcessTemplateParser unit tests', () => {

  it('command with no arguments', () => {
    const templatePath = path.resolve(__dirname, 'templates/no-arguments.template');
    expect(templateParser.parse(templatePath)).to.eql({
      cmd: 'ls',
      args: []
    });
  });

});
