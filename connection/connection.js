
import mongoose from "mongoose";

mongoose.connect(`mongodb://0.0.0.0:27017/recipeBlog`, {

}).then(() => {
    console.log("connection Success")
}).catch((err) => {
    console.log(err)
    console.log("connection Failed")
})