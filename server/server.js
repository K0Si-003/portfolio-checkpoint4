require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use('/tags', require('./routes/tag.routes.js'));

const server = app.listen(PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${PORT}`);
});

module.exports = server;