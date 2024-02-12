const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/routes');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

dotenv.config();

const port = process.env.PORT || 9000;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'src/static')));
app.use(express.json());
app.use('/api', router);

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
