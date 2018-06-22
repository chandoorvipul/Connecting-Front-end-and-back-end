var mongoose = require('mongoose');
var LastSchema = mongoose.Schema({
    firstName: String,
    lastName : String,
    emailId : String,
    gender : String,
    from : Date,
    to : Date,
    numberOfTickets : String,
    age : String,
   });
   module.exports = mongoose.model('Consumer', LastSchema);