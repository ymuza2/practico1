const fs = require('fs');

const punt2 = fs.readdir('./', (err, files) => {      

    (err) ? console.log(err) : console.log(files);
    
    
    })


    module.exports.punt2 = punt2;