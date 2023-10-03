require('dotenv').config();

import cors from 'cors';
import express from 'express';

import { router } from './router';
import { pool } from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
