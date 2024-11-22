const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
require('dotenv').config(); //dotenv
require("./Models/db"); // mongodb connection
//routes
const AuthRouter = require('./Routes/AuthRouter');
const BlogRouter = require('./Routes/BlogRouter');



app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/blog', BlogRouter);



app.get('/', (req, res)=>{
  res.send("hello from the server");
})



app.listen(port, ()=>{
  console.log(`This server is running on port: ${port}`);
})