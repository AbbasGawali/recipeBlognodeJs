
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const DBURL = process.env.DBURL; 

mongoose.connect(DBURL, {
}).then(() => {
    console.log("connection Success")
}).catch((err) => {
    console.log(err)
    console.log("connection Failed")
})