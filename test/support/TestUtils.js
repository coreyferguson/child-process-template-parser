
const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

chai.use(sinonChai);

module.exports = {
  expect: chai.expect,
  sinon
}
