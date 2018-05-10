const fs = require('fs');
var pages =[];
fs.readdirSync(__dirname + "/../web").forEach(file => {
    console.log(file);
    if (file.indexOf(".html")!=-1) {
        pages.push(file)
    }
});

module.exports = pages;