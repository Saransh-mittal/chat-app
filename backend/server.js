const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send(`App running on 5000`);
});

const PORT = process.env.PORT;
app.listen(5000,console.log(`Server started on port ${PORT}`));