let url = 'http://myurl.com';

log = (message1,  message2) => {

console.log(message1, message2 );

};

//module.exports.url = url; //del lado izquiero le digo que es lo que exporto.
module.exports.log = log;