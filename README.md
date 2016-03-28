# Hunspell Spellcheck For Node.js

Spellchecker for Node using Hunspell

## Installation

  Install Huspell:

    $ sudo apt-get install hunspell-spellcheck

  Install with [npm](http://npmjs.org):

    $ npm install hunspell-spellcheck

## Usage

```js
var SpellCheck = require('hunspell-spellcheck');
var spellcheck = new SpellCheck("en_US");
    
console.log(spellcheck.check("dgos"));//false
console.log(spellcheck.suggestion("dgos"));//["dogs", "dos", "gos", "gods", "egos", "duos", "d gos", "goos", "Osgood", "Degas", "dogy's"]
```

## License

  MIT
  
  Copyright (C) 2016 André Ferreira

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.