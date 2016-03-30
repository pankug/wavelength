var mongoose = require('mongoose');

var UserPostSchema = new mongoose.Schema({
	name :{type: String, required: true},
	email: {type: String, required: true},
    profile_pic: {type: String, required: true},
    social_provider: {type: String, required: true},
    gender:{type: String, required: true},
    score:  Number,
    age: Number,
    status:String,
    location: String,
    keyword1: String,
    keyword2: String,
    keyword3: String
   
    


});



var UserDetails = module.exports = mongoose.model('UserDetails', UserPostSchema,'dummyUsers');

// Get dummyProfiles

module.exports.getUserdata = function(callback,limit){

    UserDetails.find(callback).limit(limit);

}