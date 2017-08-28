
const fs = require('fs');

class NodeChildProcessTemplateParser {

  parse(file, model) {
    const lines = fs
      .readFileSync(file)
      .toString()
      .trim()
      .split('\n');
    const cmd = lines[0];
    const args = lines.slice(1);
    return { cmd, args };
  }

}

const singleton = new NodeChildProcessTemplateParser();
singleton.NodeChildProcessTemplateParser = NodeChildProcessTemplateParser;
module.exports = singleton;
