//Importing the Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(express.json());
app.use(cors());

//Ensuring that Database is Connected
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

//For using ROUTES
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running...");
})

app.listen(5000, () => console.log("Server is running on 5000")); 