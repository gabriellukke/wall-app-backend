require('dotenv/config');
const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use('/user', userRouter);

app.listen(PORT, () => console.log(`API's running on PORT: ${PORT}`));
