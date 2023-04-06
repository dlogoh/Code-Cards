require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const connectDB = require("../config/db");

const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running..."));

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
