const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((error)=> {
    console.log("MongoDB connection error:", error);
})