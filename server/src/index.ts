require('dotenv').config();

const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
