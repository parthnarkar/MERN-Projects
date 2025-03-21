const Todo = require('../models/Todo');
const express = require('express');

const router = express.Router();

//Create a new todo
router.post("/add", async (req, res) => {
    try {
        const { task } = req.body;
        const newTodo = new Todo({ task });
        await newTodo.save();
        res.status(201).json(newTodo)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Get all Tasks
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(201).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a todo(mark as completed)
router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
        res.status(201).json(updatedTodo);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a todo
router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await Todo.findByIdAndDelete(id);
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;