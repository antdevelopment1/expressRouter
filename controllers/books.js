// Crud Functions
function createBook(req, res) {
    res.json({message: "You created a new book"});
}

// Retrieve all books
function getAllBooks(req, res) {
    res.json({message: "All books have been retrieved"});
}

// Update a book
function updateBook(req, res) {
    res.json({message: "The name of the book has been updated."});
}

// Delete a book
function deleteBook(req, res) {
    res.json({message: "This book has been deleted."});
}

module.exports = {
    createBook,
    getAllBooks,
    updateBook,
    deleteBook
};