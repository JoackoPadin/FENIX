const path = require("path");
const express = require("express");
const { dirname } = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "Public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.listen(process.env.PORT || 3000, () => console.log("Servidor on Fire"));

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
