require('colors');

const mostrarMensaje = () => {

    // Header
    console.clear();
    console.log('====================================='.green);
    console.log('======  Seleccione una opción  ======'.green);
    console.log('=====================================\n'.green);

    // Crear el menu
    console.log(`${'1.'.green} Crear una tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`);

    // REVIEW readline
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione un opción: ', (opt) => {
        console.log({ opt });
        readline.close();
    });
}

module.exports = {
    mostrarMensaje
}
