const mongoose = require('mongoose');

const username = encodeURIComponent('Yeab12');
const password = encodeURIComponent('user123');
const uri = `mongodb+srv://${username}:${password}@portfoliocluster0.ljdx1gf.mongodb.net/MernApp?retryWrites=true&w=majority&appName=PortfolioCluster0`;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};


module.exports = connectDB