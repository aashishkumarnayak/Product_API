const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// uri = 
// "mongodb+srv://Thapa:kota1234@thapaapi.dt86bzr.mongodb.net/ThapaAPI?retryWrites=true&w=majority"
const connectDB = (uri) => {
    console.log("connect Database");
return mongoose.connect(uri, {
useNewUrlParser:true,
useUnifiedTopology:true
});
};

module.exports = connectDB;