require('dotenv/config');
const express = require('express');
const cors = require('cors');

const { createUser } = require('./controllers/user.controller');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("Hello");
});

app.post('/', createUser)

app.listen(PORT, () => console.log(`API's running on PORT: ${PORT}`));
