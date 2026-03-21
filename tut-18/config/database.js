const mongoose = require('mongoose');

// connect to data database custer

const connectDB = async () => {
    await mongoose.connect("your_connection_string/devTinder");
}

module.exports = {
    connectDB
}
