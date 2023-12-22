const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

connectDB();
app.get("/", (req, res) => {
  res.send(`App running on 5000`);
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(5000, console.log(`Server started on port ${PORT}`));
