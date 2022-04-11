const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Task manager App");
});

const port = process.env.port || 3030;

app.listen(port, console.log(`Server is listening on ${port}...`));
