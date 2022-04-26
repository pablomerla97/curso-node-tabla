
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();


//const base = 5;

crearArchivo(argv.b,argv.h,argv.l)
    .then(nombreArchivo => console.log( `'${nombreArchivo}' creado`.america))
    .catch(err => console.log(err));
