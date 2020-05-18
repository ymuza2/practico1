const fs = require('fs');

fs.readdir('./', (err, files) => {      

    (err) ? console.log(err) : console.log((files.reverse()));
    
    })

   