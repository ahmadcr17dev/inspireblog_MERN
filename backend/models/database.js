const mongoose = require('mongoose');
require('dotenv').config();
const mongo_url = process.env.MONGO;

mongoose.connect(mongo_url).then(() => {
    console.log("Connection is done");
}).catch((err) => {
    console.log("Error", err);
})