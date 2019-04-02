const express = require('express');
const Router = express.Router;

const {
    createBook,
    getAllBooks,
    updateBook,
    deleteBook
} = require('./../controllers/books');


// Create router
const bookRoutes = Router();

// GET book route
bookRoutes.get('/', getAllBooks);
// Keep as sublevel examples
// bookRoutes.get('/:id', getBooksByID);
// bookRoutes.get('/:id/edit', showBookForm);
// bookRoutes.post('/:id/edit', processBookForm);

// POST book route
bookRoutes.post('/', createBook);
// PUT book route
bookRoutes.put('/', updateBook);
// DELETE book route
bookRoutes.delete('/', deleteBook)

module.exports = bookRoutes;
