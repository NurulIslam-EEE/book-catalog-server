const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

// database connection
// server
const port = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Database connection is successful");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
