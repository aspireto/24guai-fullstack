var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var signSchema = new Schema({
    username:   String,
    image:      String,
    tel:        String,
    sex:        String,
    idcard:     String,
    birthday:   Date,
    driver:     String,
    models:     String,
    license:    String,    
    amount:     String,    
    level:      String,      
    group:      String,
    price:      String,
    workaddress:String,
    address:    String,
    now:        Date
});

module.exports = signSchema;