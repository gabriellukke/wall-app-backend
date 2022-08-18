require('dotenv/config');
const express = require('express');
const cors = require('cors');

const { userModel } = require('./database/models');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("Hello");
});

app.post('/', async (req, res) => {

  console.log(req.body)
  const { firstName, lastName, email, password } = req.body;

  const response = await userModel.create({ firstName, lastName, email, password });
  console.log(response);
  res.json({
    message: 'User registred successfully!'
  })
})

app.listen(PORT, () => console.log(`API's running on PORT: ${PORT}`));
