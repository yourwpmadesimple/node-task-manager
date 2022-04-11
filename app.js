const express = require("express");
const app = express();
const routes = require("./routes/tasks");

// routes
app.get("/", (req, res) => {
  res.send("Task manager App");
});
app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

// API endpoints
//app.use("/api/v1/tasks");

const port = process.env.port || 3030;

app.listen(port, console.log(`Server is listening on ${port}...`));
