const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Shivam:8uTUW4aomz3ac7hy@cluster0.zltdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;
