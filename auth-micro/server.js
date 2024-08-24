import express from "express";
const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  return res.send("<h1> apolskdm;lkasdm;lasdm;l</h1>");
});
app.listen(PORT, (req, res) => console.log("xys"));
