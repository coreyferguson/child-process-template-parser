
class NodeChildProcessTemplateParser {

  parse(file, model) {
    return '';
  }

}

const singleton = new NodeChildProcessTemplateParser();
singleton.NodeChildProcessTemplateParser = NodeChildProcessTemplateParser;
module.exports = singleton;
