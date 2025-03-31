require('dotenv').config(); 
const express = require('express');
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require('./middleware/errorhandler');
const connectDB = require('./config/dbConnection');


const app = express();
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 5000; 

app.use("/api/contacts" , contactRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
