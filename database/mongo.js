const mongoose = require('mongoose');

const dbConnection = async () => {
    
    try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Db online');    
    } catch (error) {
        console.error(error);   
        throw new Error('Error with database connection');
    }
    
}

module.exports = {dbConnection}

// Mongo Atlas en la nube
//'mongodb+srv://ikisanti:saratoga23@cluster0.ywaff.mongodb.net/pizza'
//Local modo Dev
//'mongodb://127.0.0.1:27017/pizza'