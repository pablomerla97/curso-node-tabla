const argv = require('yargs')
    .option('b',{
        alias : 'base',
        type:'number',
        demandOption : true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias : 'listar',
        type:'boolean',
        demandOption : false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias : 'hasta',
        type:'number',
        demandOption : true,
        describe: 'Es el numero hasta donde sera la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.h)){
            throw 'Hasta tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;