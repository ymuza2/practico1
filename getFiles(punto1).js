
const punt1 =()=>{
const fs = require('fs');

let punto1 = fs.readdir('./', (err, files) => {      

    (err) ? console.log(err) : console.log(files);
    
    })
};

    module.exports.punt1 =  punt1;