const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout //console.log();
});

rl.question('Bienvenido, ingrese su usuario\n', (rta) => {
    if (rta === 'Osvaldo') {
         console.log(`Bienvenido, ${rta}`);
    } else {
        process.stdout.write('Usted no está autorizado');
    }
    rl.close();
});