
const punt2 = () => {
fs = require('fs');

 fs.readdir('./', (err, files) => {      

    (err) ? console.log(err) : console.log(files);
    
    
    });

}
    module.exports.punt2 = punt2;