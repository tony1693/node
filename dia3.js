const http = require('http');
const url = require('url');
const express = require('express');

    // LEVANTAR UN SERVIDOR CON HTTP:
    
// const server = http.createServer( (request,response) => {
    // console.log('Petición recibida del cliente');
    // console.log(request.headers['user-agent']);
    // console.log(request.method);
    // response.write(' WELCOME ');
    // response.end();
// });

// server.listen(2000);

const app = express();

app.get('/' , (request , response) => {
    console.log('Petición recibida del cliente');
    console.log(request.headers['user-agent']);
    console.log(request.method);
    response.write(' WELCOME ');
    response.end();
})

app.listen(2000);

