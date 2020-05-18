/*const logger = require('./logger')

console.log(logger);

logger.log('flavio'); */





/*let sayHello = (name) => {

console.log('Hello'+ name);

};

sayHello('Flavio');

console.log(module);// veo el contenido de los modulos*/




const logger = require('./logger');
const path =require('path'); // path es un modulo que viene en node 
const os = require('os'); // path es un modulo que viene en node 
const fs = require('fs');
let pathObj = path.parse(__filename);
/*CADA ARCHIVO DEBE TENER SU PROPIA UTILIDAD*/
logger.log('path',pathObj); 

let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log('free',freeMem);
logger.log('total', totalMem);


let rootDir = fs.readdirSync('./'); // te permite obtener todos los archivos dentro de la ruta que especificamos (en parentesis) sincronicamente (no se recomienda).

fs.readdir('./', (err, files) => {      //forma asyncronica, recomendada.

(err) ? console.log(err) : console.log('async',files);

})

//console.log('sync',rootDir);







