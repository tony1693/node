let book = null;


function welcome (req,res) {
    response.send('Welcome to the Server')

}

function getBook (req , res) {
    let response;
    if(book) {
        response = book;
    } else {
        response = { error: true, code: 200, menssage: 'No existe el Libro' } 
    }
    req.send(response);
}

function getBookParams(req, res) {

    let response;

    if(book) {
        if(book.name === req.params.name) {
            response = book; 
        } else {
            response = { error: true, code: 200, message: `No existe este Titulo: ${req.params.name}` }
        }
        
    } else {
        response = { error: true, code: 200, message: 'No existe el Titulo' }
    }
    res.send(response)
}

function createBook (req, res) {

    let response;

    if (!book) {
        book = req.body;
        response = { error: false, code: 200, message: 'Libro creado Correctamente', book }
    } else {
        response = { error: true, code: 200, message: 'El Libro ya existe' }
    }

    res.send(response)
}

function updateBook (req, res) {

    let response;

    if (book) {
        book = {
            ...book,
            ...req.body ?? {}
        }

        response = { error: false, code: 200, message: 'Libro modificado correctamente', book }
    } else {
        response = { error: true, code: 200, message: 'El Libro no existe' }
    }

    res.send(response)
}

function deleteBook (req, res) {

    let response;

    if (book) {
        book = null;
        response = { error: false, code: 200, message: 'Usuario eliminado correctamente' }
    } else {
        response = { error: true, code: 200, message: 'El usuario no existe' }
    }

    res.send(response)
}

module.exports = {welcome,getBook,deleteBook,updateBook,createBook,getBookParams};