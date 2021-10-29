const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require('dotenv').config(); 


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

// set up to parse the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this is grabbing the "public" directory folder
app.use(express.static("public"));

console.log("==> ENV VARS: \n", process.env.MONGODB_URI)

// Set up and connect to the mongoose database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
// set up routes to api and html files.
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// set up server to start listening to client requests 
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});