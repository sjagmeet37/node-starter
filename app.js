const express = require("express");
const app = express();

const userRoute = require("./routes/userRoutes");

app.use("/user", userRoute);

module.exports = app;