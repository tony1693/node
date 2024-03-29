let books = [
    
        {
            id_book:1,
            id_user:5,
            title:'Don Quijote de la Mancha',
            type:'Tapa dura',
            author:'Miguel de Cervantes',
            price:12.99,
            photo:'https://images-na.ssl-images-amazon.com/images/I/71fRMTejbyL.jpg',
          },
          {
            id_book:2,
            id_user:10,
            title:'Cinco semanas en globo',
            type:'Tapa dura',
            author:'Julio Verne',
            price:19.99,
            photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cinq_Semaines_en_ballon_001.png/800px-Cinq_Semaines_en_ballon_001.png',
          },
    
];

function welcome(req, res) {
    res.send('Welcome to the Server');
}

function getBookById(req, res) {
    const bookId = parseInt(req.query.id);
    const foundBook = books.find(book => book.id_book === bookId);

    if (foundBook) {
        res.send(foundBook);
    } else {
        res.status(404).send({ error: true, code: 404, message: 'No se encontro ningun Libro' });
    }
}

function getAllBooks(req, res) {
    const bookId = parseInt(req.query.id);
    if (bookId) {
        const foundBook = books.find(book => book.id_book === bookId);
        res.send(foundBook);
    } 
    res.send(books);
}

function createBook(req, res) {
    const newBook = req.body;
    books.push(newBook);
    res.send({ error: false, code: 201, message: 'Libro Creado', book: newBook });
}

function updateBook(req, res) {
    const bookId = parseInt(req.query.id);
    const foundBookIndex = books.findIndex(book => book.id_book === bookId);

    if (foundBookIndex !== -1) {
        const updatedBook = { ...books[foundBookIndex], ...req.body };
        books[foundBookIndex] = updatedBook;
        res.send({ error: false, code: 200, message: 'Libro Actualizado', book: updatedBook });
    } else {
        res.status(404).send({ error: true, code: 404, message: 'Libro no Encontrado' });
    }
}



function deleteBook(req, res) {
    const bookId = parseInt(req.query.id);
    const foundBookIndex = books.findIndex(book => book.id_book === bookId);

    if (foundBookIndex !== -1) {
        const deletedBook = books.splice(foundBookIndex, 1);
        res.send({ error: false, code: 200, message: 'Libro eliminado correctamente', deletedBook });
    } else {
        res.status(404).send({ error: true, code: 404, message: 'Libro no encontrado' });
    }
}


module.exports = {
    welcome,
    getBookById,
    getAllBooks,
    createBook,
    updateBook,
    deleteBook,
};
