const express = require('express');
require('dotenv').config(); 
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require('./middleware/errorhandler');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000; 

app.use("/api/contacts" , contactRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
