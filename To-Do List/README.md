# 📝 To-Do List

This is a **full-stack** To-Do List web application built using **MERN stack (MongoDB, Express.js, React, and Node.js)**. The application allows users to **add, view, mark as complete, and delete tasks** in an interactive UI.

---

## 🚀 Features
- **Add tasks**: Create new tasks.
- **View tasks**: Fetch all tasks from the database.
- **Mark as completed**: Update task status.
- **Delete tasks**: Remove tasks from the database.
- **Fully responsive UI**: Optimized for all screen sizes.

---

## 🏗 Technologies Used

### **Frontend (React.js & Tailwind CSS)**
- **React.js** - UI development.
- **Axios** - API calls.
- **Tailwind CSS** - Styling the application.

### **Backend (Node.js, Express.js, MongoDB)**
- **Node.js** - Server-side JavaScript runtime.
- **Express.js** - Framework for handling API requests.
- **MongoDB & Mongoose** - Database and object modeling.
- **CORS** - Cross-origin request handling.
- **Dotenv** - Managing environment variables.

---

## 📂 Project Structure
```
todo-list/
│── frontend/          # React Frontend Code
│   ├── src/
│   │   ├── App.jsx    # Main component
│   │   ├── index.css  # Styling
│   └── ...
│
│── backend/           # Node.js Backend Code
│   ├── models/
│   │   ├── Todo.js    # Mongoose schema
│   ├── routes/
│   │   ├── todoRoutes.js # API routes
│   ├── index.js       # Main server entry point
│   └── .env           # Environment variables
│
├── package.json       # Project dependencies
└── README.md          # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/todo-list.git
cd todo-list
```

### 2️⃣ Setup the Backend
```sh
cd backend
npm install
```
- Create a `.env` file inside the `backend/` folder and add:
```
MONGO_URI=your_mongodb_connection_string
```
- Start the backend server:
```sh
npm start
```
**Backend runs on:** `http://localhost:5000/`

### 3️⃣ Setup the Frontend
```sh
cd ../frontend
npm install
npm run dev
```
**Frontend runs on:** `http://localhost:5173/`

---

## 📌 API Endpoints

### 🔹 Create a Task
**POST** `/api/todos/add`
```json
{
  "task": "New task name"
}
```

### 🔹 Get All Tasks
**GET** `/api/todos/`

### 🔹 Update a Task (Mark as Completed)
**PUT** `/api/todos/update/:id`

### 🔹 Delete a Task
**DELETE** `/api/todos/delete/:id`

---

## 🎯 Future Enhancements
- ✅ Add user authentication.
- ✅ Implement due dates and task categories.
- ✅ Improve UI/UX with animations.

---

## 🤝 Contributing
Feel free to contribute by creating pull requests!

📌 **Made with ❤️ by Parth**

