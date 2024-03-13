const express = require('express');
const router = require("./routes/index");
const app = express();


// conduce a donde va

app.use(router);

module.exports = app;