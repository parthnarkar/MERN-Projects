# To-Do List Backend

This is the backend of a simple To-Do List application built using **Node.js**, **Express.js**, and **MongoDB**.

## Features
- Add new tasks
- Fetch all tasks
- Mark tasks as completed
- Delete tasks

## Technologies Used
- **Node.js**
- **Express.js** (for building REST API)
- **MongoDB** (for database)
- **Mongoose** (for MongoDB object modeling)
- **Cors** (to allow cross-origin requests)
- **Dotenv** (to manage environment variables)

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/To-Do-List.git
cd To-Do-List/backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the **backend** folder and add your MongoDB connection string:
```sh
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the Server
```sh
npm start
```
The backend server will run on **http://localhost:5000**.

## API Endpoints

### 1. Create a New Task
**POST** `/api/todos/add`
```json
{
  "task": "Buy groceries"
}
```
_Response:_
```json
{
  "_id": "65c1234abcd567890efg",
  "task": "Buy groceries",
  "completed": false
}
```

### 2. Get All Tasks
**GET** `/api/todos/`
_Response:_
```json
[
  { "_id": "65c1234abcd567890efg", "task": "Buy groceries", "completed": false },
  { "_id": "65c5678abcd123456xyz", "task": "Go to gym", "completed": true }
]
```

### 3. Mark a Task as Completed
**PUT** `/api/todos/update/:id`
_Response:_
```json
{
  "_id": "65c1234abcd567890efg",
  "task": "Buy groceries",
  "completed": true
}
```

### 4. Delete a Task
**DELETE** `/api/todos/delete/:id`
_Response:_
```json
{
  "message": "Todo deleted successfully"
}
```

## Project Structure
```
backend/
├── models/
│   ├── Todo.js        # Mongoose schema for Todo model
├── routes/
│   ├── todoRoutes.js  # Defines API routes for To-Do CRUD operations
├── .env               # Environment variables (not committed to Git)
├── index.js           # Main entry point of the backend server
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Notes
- Ensure MongoDB is running before starting the backend server.
- Use **Postman** or **Insomnia** for testing API endpoints.

---
**Made with ❤️ by Parth**