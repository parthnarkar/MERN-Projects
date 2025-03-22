import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todos"; // Updated to match backend route

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks on component mount
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Add a new task
  const addTask = () => {
    if (!newTask.trim()) return;
    axios.post(`${API_URL}/add`, { task: newTask }) // Fixed URL
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask("");
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  // Toggle task completion
  const toggleComplete = (id, completed) => {
    axios.put(`${API_URL}/update/${id}`, { completed: !completed }) // Fixed URL
      .then((response) => {
        setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  // Delete a task
  const deleteTask = (id) => {
    axios.delete(`${API_URL}/delete/${id}`) // Fixed URL
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">📝 To-Do List</h1>
        
        {/* Task Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition"
          >
            Add
          </button>
        </div>

        {/* Task List Section */}
        <ul className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-gray-400 text-center">No tasks yet. Add one!</p>
          )}
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center bg-gray-700 p-3 rounded-lg shadow"
            >
              <span
                className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
              >
                {task.task} {/* Fixed to use 'task' instead of 'title' */}
              </span>

              {/* Complete/Undo Button */}
              <button
                onClick={() => toggleComplete(task._id, task.completed)}
                className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
                  task.completed
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              {/* Delete Button */}
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 ml-2 rounded-lg text-sm font-semibold text-white transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
