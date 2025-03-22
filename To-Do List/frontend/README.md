# To-Do List Frontend

This is the frontend for the To-Do List application, built using **React.js** and **Tailwind CSS**. The frontend communicates with the backend API to manage tasks in a user-friendly interface.

## 📂 Folder Structure
```
frontend/
│── src/
│   ├── components/        # Reusable UI components (if any)
│   ├── App.jsx           # Main application component
│   ├── index.js          # Entry point for React
│── public/               # Static assets
│── .env                  # Environment variables (not included in repo)
│── package.json          # Dependencies and scripts
│── tailwind.config.js    # Tailwind CSS configuration
│── vite.config.js        # Vite configuration for development
```

## 🚀 Features
- Add new tasks
- Retrieve all tasks
- Mark tasks as completed
- Delete tasks
- Responsive and visually appealing UI

## 🛠 Technologies Used
- **React.js** - Frontend library
- **Axios** - HTTP requests
- **Tailwind CSS** - Styling
- **Vite** - Fast build tool for React

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/todo-list.git
cd todo-list/frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Frontend
```sh
npm run dev
```
The frontend will run on `http://localhost:5173/`.

## 📌 API Integration
- **Base URL:** `http://localhost:5000/api/todos`
- Fetch all tasks → `GET /api/todos/`
- Add a task → `POST /api/todos/add`
- Mark task as completed → `PUT /api/todos/update/:id`
- Delete a task → `DELETE /api/todos/delete/:id`

## 🎯 Next Steps
- Implement user authentication
- Add task categories and due dates
- Enhance UI with animations

---
**Made with ❤️ by Parth**