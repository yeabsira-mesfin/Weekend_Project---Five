const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./Middleware/errorMidleware');
const connectDB = require('./Config/db')
const app = express();

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./Routes/goalRoutes'))

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));