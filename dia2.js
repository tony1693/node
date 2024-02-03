
const fs = require('fs').promises;
const readline = require('readline');

console.log("Mensaje 1");

const json = 'person.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questions (prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    try {
        const name = await questions ('Nombre: ');
        const surname = await questions ('Apellido: ');
        const age = await questions ('Edad: ');

        const person = {
            name: name,
            surname: surname,
            age: age,
        };

        rl.close();

        try {
            await fs.unlink(json);
            console.log('Archivo JSON anterior eliminado');
        } catch (err) {}

        await fs.writeFile(json, JSON.stringify(person));
        console.log('Archivo JSON Guardado');

        const data = await fs.readFile(json, 'utf8');
        const readPerson = JSON.parse(data);

        console.log('Mensaje 2');
        console.log('Archivo JSON leído');
        console.log(readPerson);

        setTimeout(function () {
            console.log("Mensaje 3");
            console.log('Nombre leído del archivo JSON:', readPerson.name);
        }, 1000);

    } catch (err) {
        console.error('Error:', err);
    } finally {
        rl.close();
    }
}

main();
