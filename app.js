const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

//app.get("/", (req, res) => {
 // res.send("Hello from version 2 Super excited to do DEVOPS, Thank you Chatgpt 🚀");
//});

app.get("/error", (req, res) => {
  throw new Error("Simulated server crash");
});

app.post("/message", (req, res) => {
  const { text } = req.body;

  // ❌ Missing field
  if (text === undefined) {
    return res.status(400).json({ error: "Text is required" });
  }

  // ❌ Wrong type
  if (typeof text !== "string") {
    return res.status(400).json({ error: "Text must be a string" });
  }

  // ❌ Empty string
  if (text.trim() === "") {
    return res.status(400).json({ error: "Text cannot be empty" });
  }

  // ✅ Valid input
  res.status(200).json({ message: text });
});
if (require.main === module) {
  app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
  });

};
module.exports = app;

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    error: "Internal Server Error",
  });
});