const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
app.use(express.json());
const userRoutes = require("./routes/userRoutes");

connectDB();
app.get('/',(req,res)=>{
    res.send(`App running on 5000`);
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT;
app.listen(5000,console.log(`Server started on port ${PORT}`));