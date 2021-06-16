const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
       await mongoose.connect(process.env.MONGODB_CNN, {
           useNewUrlParser: true,
           useFindAndModify: false,
           useUnifiedTopology: true,
           useCreateIndex: true
       })
       console.log('Conected to mongo')
    }catch(err){
        throw new Error('Error to connect data base')
    }
}

module.exports = {
    dbConnection
}