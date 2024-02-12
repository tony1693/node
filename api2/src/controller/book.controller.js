let books = [];

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
        books[foundBookIndex] = { ...books[foundBookIndex], ...req.body };
        res.send({ error: false, code: 200, message: 'Libro Actualizado', book: books[foundBookIndex] });
    } else {
        res.status(404).send({ error: true, code: 404, message: 'Libro no Encontrado' });
    }
}

function deleteBook(req, res) {
    const bookId = parseInt(req.query.id);
    const foundBookIndex = books.findIndex(book => book.id_book === bookId);

    if (foundBookIndex !== -1) {
        const deletedBook = books.splice(foundBookIndex, 1);
        res.send({ error: false, code: 200, message: 'Libro eliminado', book: deletedBook });
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