

// • Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
// 
// • Pasados tres segundos, se debe imprimir “Mensaje 2”.
// 
// • Y después de que se imprima este mensaje, que se imprima “Mensaje 3”

// Crea un objeto con las siguientes propiedades: name, surname, age.
// 
// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
// 
// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.

// 

const fs = require('fs');
const readline = require('readline');

console.log("Mensaje 1");

// Ruta del archivo JSON
const json = 'person.json';

// Crear una interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar valores al usuario
rl.question('Nombre: ', (name) => {
    rl.question('Apellido: ', (surname) => {
        rl.question('Edad: ', (age) => {
            // Objeto con los valores ingresados
            const person = {
                name: name,
                surname: surname,
                age: age, 
            };

            rl.close();

            // Eliminar el archivo JSON anterior si existe
            try {
                fs.unlinkSync(json);
                console.log('Archivo JSON anterior eliminado');
            } catch (err) {
                // No hacer nada si el archivo no existe
            }

            // Escribir el objeto en el archivo JSON
            fs.writeFile(json, JSON.stringify(person), (err) => {
                if (err) throw err;

                console.log('Archivo JSON Guardado');

                // Leer el archivo JSON
                fs.readFile(json, 'utf8', (err, data) => {
                    if (err) throw err;

                    const readPerson = JSON.parse(data);
                    console.log('Mensaje 2');
                    console.log('Archivo JSON leido');
                    console.log(readPerson);

                    // Agregar un nuevo mensaje después de leer el archivo
                    setTimeout(function () {
                        console.log("Mensaje 3");
                        console.log('Nombre leido del archivo JSON:', readPerson.name);
                    }, 1000);
                });
            });
        });
    });
});



