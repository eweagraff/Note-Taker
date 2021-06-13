// require express dependency
const express = require("express");
//const { v4: uuidv4 } = require("uuid");

const routes = require("./routes/routes.js");

// sets up the express app
const app = express();
const PORT = process.env.PORT || 3001;

//Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
//starts server to begin listening
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
