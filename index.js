var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.red);
    console.log(data);
        fs.writeFile('./tekst.txt', '\nA tak wygląda po zapisie!', function(err) {
            if (err) throw err;
            console.log('Zapisano!'.green);
            
        });
    });        