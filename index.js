
const fs = require('fs');

class NodeChildProcessTemplateParser {

  parse(file, model) {
    let lines = fs.readFileSync(file).toString();
    lines = eval('`' + lines + '`');
    lines = lines.trim()
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '')
      .filter(line => !line.startsWith('//'));
    const cmd = lines[0];
    const args = lines.slice(1);
    return { cmd, args };
  }

}

const singleton = new NodeChildProcessTemplateParser();
singleton.NodeChildProcessTemplateParser = NodeChildProcessTemplateParser;
module.exports = singleton;
