require('dotenv').config();
const express = require('express');
const router = require ('./app/router');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3001;

app.use('/api',router);

app.listen(PORT, () =>
console.log(`Server listening on: http://localhost:${PORT}`));

module.exports= app;
