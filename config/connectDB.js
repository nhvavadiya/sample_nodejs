const mongoose = require('mongoose');


const db = mongoose.connect('mongodb://127.0.0.1:27017/blog-project')

db ? console.log('database connection successful'):console.log('Error in database connctions');
