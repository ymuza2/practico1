

const fs = require('fs');



const punt4 = () => {
  fs.readdir('./', (err, files) => {
    let amount = 0; let startLetter = 'a';
    for (const file of files) { // este for itera en c/u de los archivos de files, guarda cada iteracion de files en file.
      if (file.startsWith(startLetter)) {
        amount++;    
      }
    }
    console.log('The amount of files starting with letter ', startLetter + ' is ' + amount);
  });


};


module.exports.punt4 = punt4;



