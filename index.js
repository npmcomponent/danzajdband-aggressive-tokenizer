
var inherit = require('inherit')
  , tokenizer = require('tokenizer')();

function AggressiveTokenizer() {}

inherit(Tokenizer, AggressiveTokenizer);

AggressiveTokenizer.prototype.tokenize = function(str) {
  return this.trim(str.split(/\W+/));
};

module.exports = function() {
  return new AggressiveTokenizer();
};
