const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://panengaldeepuraj:U79HpM0VgTKz0th3@cluster0.4o4cobw.mongodb.net/rentcar' , {useNewUrlParser: true,  useUnifiedTopology: true} )

    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', ()=>{
        console.log('Mongo DB Connection Error')
    })
}


connectDB()

module.exports = mongoose