const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log("Connection to database unsuccessful -> " ,error.message);
        process.exit();
    }
};

module.exports = connectDB;