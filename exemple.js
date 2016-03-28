var SpellCheck = require('./index.js');
var spellcheck = new SpellCheck("en_US");

console.log(spellcheck.check("dgos"));
console.log(spellcheck.suggestion("dgos"));
