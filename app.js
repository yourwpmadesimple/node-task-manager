const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// Middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Task manager App");
});
app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

// API endpoints
app.use("/api/v1/tasks", tasks);

const port = process.env.port || 3030;

app.listen(port, console.log(`Server is listening on ${port}...`));
