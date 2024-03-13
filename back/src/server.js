const express = require('express');
const router = require("./routes/index");
const morgan = require('morgan');
const cors = require('cors'); 


const app = express();

// Requerirs los middleware

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())


// conduce a donde va

app.use(router);

module.exports = app;