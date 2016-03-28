"use strict";

var execSync = require('child_process').execSync;
        
module.exports = function(lang){
    lang = (lang !== undefined) ? lang : "en_US";
    
    return {
        lang: lang,
        
        check: function(word){
            var r = execSync('echo "'+word+'" | hunspell -d '+this.lang, {timeout: 1000}).toString();
            var rl = r.split("\n");
            return (rl[1].substr(0, 1) === "+");
        },
        
        suggestion: function(word){
            var r = execSync('echo "'+word+'" | hunspell -d '+this.lang, {timeout: 1000}).toString();
            var rl = r.split("\n");
            var rt = {};
            
            for(var i = 1; i < rl.length; i++){
                var line = rl[i];
                
                if(line.substr(0, 1) === "&"){
                    var ld = line.split(": ");
                    
                    line.replace(/&\s(.*?)\s/gmi, function(){
                        var word = arguments[1];
                        var suggestions = ld[1].split(", ");
                        rt[word.trim()] = suggestions;
                    });
                }
            }
            
            return rt;
        }
    };
};