const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

require("./routes.js")(app);

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})