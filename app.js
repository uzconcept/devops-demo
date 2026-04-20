const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from version 2 Super excited to do DEVOPS, Thank you Chatgpt 🚀");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});