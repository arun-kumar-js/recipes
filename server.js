const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const recipeRoutes = require('recipeRoutes');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});