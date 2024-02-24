require('dotenv').config();
const mongoose =require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_STRING,{USEnEWPARESER: TRUE,useUnifiedTopology:true})
.then(())=console.log('connected to database'))
.catch(err =>console.error('error connecting to database:',err));