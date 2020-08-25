const rfcGenerator = require('./plop-templates/index')

module.exports = function (plop) {
  plop.setGenerator('rfc', rfcGenerator)
}
