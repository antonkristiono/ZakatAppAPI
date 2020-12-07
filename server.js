const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger')
const connectDB = require ('./config/db');
const colors = require ('colors');
// load env variable
dotenv.config({ path: './config/config.env' });

// connect DB
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');


const app = express();

app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps',bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(` Server Berjalan di ${process.env.NODE_ENV} mode di port ${PORT}`.yellow.bold)
);


// Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    // Close Server & Exit process
    server.close(() => process.exit(1));
})
