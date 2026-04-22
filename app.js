const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from version 2 Super excited to do DEVOPS, Thank you Chatgpt 🚀");
});
// New Post endpoint 
app.post("/message", (req, res) => {
  const { text } = req.body;

  if(!text){
    return res.status(400).json({error: "Text is required"});
  }

   res.status(200).json({ message: text });

});
if (require.main === module) {
  app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
  });

};
module.exports = app;