const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userController = require("./controller/User");

const app = express();

const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//connect to db
mongoose.connect(
  "mongodb+srv://hope:sxekojje321@cluster0-5cn3a.mongodb.net/communal?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", userController);

app.listen(port, () =>
  console.log(`App is listening http://localhost:${port}`)
);
