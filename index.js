const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Using Mongoose ODM to connect with MongoDB 
main().catch(err => console.log(err));
async function main() {
      await mongoose.connect('mongodb+srv://msheshant1997:Sheshant1997@api-cluster.dunnc6n.mongodb.net/');
}

// Verifying MongoDB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to MongoDB");
});

app.use('/', require('./Routes/index'));

//Setting the express server at defined port
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
});