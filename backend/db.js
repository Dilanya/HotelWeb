const mongoose = require("mongoose");
const { connect, Schema , Types,  model} = require('mongoose');
const uri = process.env.DB
module.exports = () => {
    connect(uri, (err) => {
        if (err) {
            console.error("DB connection error",err);
            process.abort();
        } else{
            console.log('DB connected successfully')
        }
      });
}
