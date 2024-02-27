const { Router } = require('express');
const router = Router();
const bookController = require('../controller/book.controller');

// router.get('/books', bookController.getBookById);

router.get('/books', bookController.getAllBooks);

router.post('/books', bookController.createBook);

router.put('/books', bookController.updateBook);

router.delete('/books', bookController.deleteBook);

module.exports = router;
