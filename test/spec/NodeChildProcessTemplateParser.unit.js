
const path = require('path');
const templateParser = require('../..');
const { expect } = require('../support/TestUtils');

describe('NodeChildProcessTemplateParser unit tests', () => {

  it('command with no arguments', () => {
    const templatePath = path.resolve(__dirname, 'templates/ls.template');
    expect(templateParser.parse(templatePath)).to.eql({
      cmd: 'ls',
      args: []
    });
  });

  it('command with arguments', () => {
    const templatePath = path.resolve(__dirname, 'templates/ls-l.template');
    expect(templateParser.parse(templatePath)).to.eql({
      cmd: 'ls',
      args: ['-l']
    });
  });

  it('command with comments', () => {
    const templatePath = path.resolve(__dirname, 'templates/comments.template');
    expect(templateParser.parse(templatePath)).to.eql({
      cmd: 'ls',
      args: ['-l']
    });
  });

  it('multiple newlines ignored', () => {
    const templatePath = path.resolve(__dirname, 'templates/multiple-newlines.template');
    expect(templateParser.parse(templatePath)).to.eql({
      cmd: 'ls',
      args: ['-l']
    });
  });

  it('evaluated with given model object', () => {
    const templatePath = path.resolve(__dirname, 'templates/command-with-model.template');
    expect(templateParser.parse(templatePath, { name: 'nameValue' })).to.eql({
      cmd: 'find',
      args: [
        '.',
        '-name',
        "nameValue"
      ]
    });
  });

});
