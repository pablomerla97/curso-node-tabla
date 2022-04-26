const fs = require('fs');
require('colors');

const crearArchivo = async( base, hasta,listar = false) => {
    if(listar){
        console.log('============================================================'.rainbow);
        console.log(`     Tabla del ${base} hasta ${hasta}  `.rainbow);
        console.log('============================================================'.rainbow);
    }

    let salida, consola = '';

    for(let i = 1; i <= hasta ; i++){
        salida += `${base}  x ${i} = ${base * i} \n`;
        consola += `${base}`.grey + " x ".underline.magenta + ` ${i}`.cyan + " = ".underline.magenta + `${base * i}`.gray + `\n`;
    }
    if(listar)
        console.log(consola);
    let nombreArchivo = `./salida/tabla-${base}-${hasta}.txt`;

    try{
        fs.writeFileSync(nombreArchivo,salida);
        return nombreArchivo;
    }catch(error){
        throw error;
    }
}



module.exports = {
    crearArchivo
}

