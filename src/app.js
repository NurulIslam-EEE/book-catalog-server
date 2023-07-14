const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const { restart } = require("nodemon");

// middleware
app.use(express.json());
app.use(cors());

// route

app.use("/api/v1/book");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// posting to database

module.exports = app;
