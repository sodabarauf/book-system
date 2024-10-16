# Book-system(Build a Full-Featured RESTful API 📟)

## Overview 🎬

This project is a simple Node.js API built using Express and MongoDB. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a user and course collections stored in a MongoDB database in its compass. The API interacts with a Mongoose model to manage book data, including title (String)
author (String)
publishedYear (Number)
genre (String)
rating.

## Features 🎯

- **Create User**: Add a new user to the database.
- **Read Users**: Fetch a list of all users or retrieve a specific user or course by ID.
- **Update User**: Modify user and course information.
- **Delete User**: Remove a user and course from the database.

## Technologies 📢

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **MongoDB Atlas**: A NoSQL database used to store the user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## DEMO 📺
[Deployment Link]()

## Installation and Setup 🔌

   ```bash
   clone the repo by (git clone https://github.com/sodabarauf/book-system.git)
   change directory by (cd book-system)
   install dependencies by (npm install)
   run server by (node index.js)
   ```
## setup mongodb
```bash
-Create a MongoDB cluster and get the connection string.
-Replace the MongoDB connection URL in the dbUrl variable in the index.js file:
-const dbUrl = 'your-mongodb-connection-url';
-Start the server:
-The server will run at http://localhost:5000.
```



## API Endpoints 👧
### Checklist for Thunder Client:
```bash
GET all books: Use GET request to http://localhost:5000/api/books
GET a single book: Use GET request to http://localhost:5000/api/books/<book-id>
POST a new book: Use POST request to http://localhost:5000/api/books with a JSON body like:
json
Copy code
{
  "title": "1984",
  "author": "George Orwell",
  "publishedYear": 1949,
  "genre": "Dystopian",
  "rating": 5
}
PUT (Update) a book: Use PUT request to http://localhost:5000/api/books/<book-id> with updated JSON data.
DELETE a book: Use DELETE request to http://localhost:5000/api/books/<book-id>
```

## Project Structure 📝
```bash
book-system/
│
├── models/
│   └── bookModel.js
├── routes/
│   └── bookRoutes.js
├── controllers/
│   └── bookController.js
├── config/
│   └── db.js
├── .env
├── index.js
└── package.json
```

## Author 👩‍💼
Sodaba✨Rauf✨
- Github: [https://github.com/sodabarauf]✔
- LinkedIn: [https://www.linkedin.com/in/sodaba-r-5a0733255/]✔
- Email: [sodabarauf4@gmail.com]✔

## Contributing 🤝
🎇 by using this link you can share your opinion : [https://github.com/sodabarauf/book-system.git]
