//Importing the Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());    //Allows JSON data in requests
app.use(cors());    //Enables frontend-backend communication using cors

//Ensuring that Database is Connected
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.get("/" , (req , res) => {
    res.send("Backend is running...");
})

app.listen(5000 , () => console.log("Server is running on 5000")); 