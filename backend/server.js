const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.get("/api/goals", (req, res) => {
  res.send("Hello from get req");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
