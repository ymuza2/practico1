const fs = require('fs');

const punt3=()=>{

fs.readdir('./', (err, files) => {      

    (err) ? console.log(err) : console.log((files.reverse()));
    
    });

};

   module.exports.punt3 = punt3;