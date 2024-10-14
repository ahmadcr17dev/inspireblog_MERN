const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyparser = require('body-parser')
require('./models/database')
const authrouter = require('./routes/userrouter')
const port = 3000;

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use('/auth', authrouter);

app.get('/home', (req, res) => {
    res.send("Hello World Home!");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})