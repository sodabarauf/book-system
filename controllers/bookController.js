const Book = require('../models/bookModel');

// Fetch all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books); // Return the response
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return the error response
  }
};

// Fetch a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.json(book); // Return the response
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return the error response
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook); // Return the response
  } catch (error) {
    return res.status(400).json({ message: error.message }); // Return the error response
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.json(updatedBook); // Return the response
  } catch (error) {
    return res.status(400).json({ message: error.message }); // Return the error response
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(204).json({ message: 'Book deleted' }); // Return the response
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return the error response
  }
};
