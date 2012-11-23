
var inherit = require('inherit')
  , Tokenizer = require('tokenizer');

function AggressiveTokenizer() {}

inherit(AggressiveTokenizer, Tokenizer);

AggressiveTokenizer.prototype.tokenize = function(str) {
  return this.trim(str.split(/\W+/));
};

module.exports = new AggressiveTokenizer;
