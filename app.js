const express = require("express");

const app = express();

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(4002, () => {
  console.log("app is listing on port 4002");
});
