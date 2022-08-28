const express = require('express');
const cors = require('cors');
const { userRouter, postRouter } = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', userRouter);
app.use('/post', postRouter);

module.exports = app;

