const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware for security, logging, and CORS
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Import routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: "error",
    message: err.message,
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
