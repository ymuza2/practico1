const fs = require('fs');

const cant =fs.readdir('./', (err, files) => {      

    (err) ? console.log(err) : console.log(files);
    
 //const result = files.map(([v])=> v);
    
   //console.log(result);
    //console.log(files.charAt(0));

   // const quantity = files.filter(file => file[0] === 'b').length;
    //console.log(quantity);
        
        
      for (let i=0; i<files.length; i++){

          //console.log(files[i][0]);
            const quantity = files.filter(file => file[0] === files[i][0]).length;
             console.log(`the amount of files starting with the letter ${files[i][0]} is: `+ quantity);

             /*recorre 1 por 1 los files, y cada vez que pasa por uno dice cual es la cantidad. No se me ocurre como hacer que muestre la cantidad 1 vez*/
      }                
    })

       


         
  
    
    