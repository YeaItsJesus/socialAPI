const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require("./routes/apiRoutes");

//Can change to /
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
