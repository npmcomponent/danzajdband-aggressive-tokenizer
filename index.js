
var inherit = require('component-inherit')
  , Tokenizer = require('danzajdband-tokenizer');

function AggressiveTokenizer() {}

inherit(AggressiveTokenizer, Tokenizer);

AggressiveTokenizer.prototype.tokenize = function(str) {
  return this.trim(str.split(/\W+/));
};

module.exports = new AggressiveTokenizer;
