const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware for security, logging, and CORS
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Import routes
const bookRoutes = require('./routes/bookRoutes');
app.use("/api/books", bookRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/style.css"> <!-- Link to your CSS file -->
        <title>Welcome to the API</title>
      </head>
      <body>
        <h1>Welcome to the API!</h1>
        <p>This API provides a collection of books, allowing you to create, read, update, and delete book entries. It's designed to be a simple and efficient way to manage a library of books, with endpoints for all CRUD operations.</p>
        <p>To get started, you can access the following endpoints:</p>
        <ul>
          <li><strong>GET /api/books</strong>: Retrieve a list of all books.</li>
          <li><strong>POST /api/books</strong>: Add a new book to the collection.</li>
          <li><strong>GET /api/books/:id</strong>: Retrieve details of a specific book by its ID.</li>
          <li><strong>PUT /api/books/:id</strong>: Update details of a specific book by its ID.</li>
          <li><strong>DELETE /api/books/:id</strong>: Remove a book from the collection by its ID.</li>
        </ul>
      </body>
    </html>
  `);
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message,
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
