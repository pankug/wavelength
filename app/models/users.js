var mongoose = require('mongoose');

var matchingPeopleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    profile_pic: String,
    tagline: String,
    status: {type: String, required: true},
    location: String

});


var  wavelengthSchema = new mongoose.Schema({

    name : String,
	email: {type: String, required: true},
    profile_pic: {type: String, required: true},
    social_provider: String,
    gender:String,
    score:  Number,
    age: Number,
    status:String,
    location: {type: String, required: true},
    keyword1: String,
    keyword2: String,
    keyword3: String,
    matchingPeople: [matchingPeopleSchema]
});

var wavelength = module.exports = mongoose.model('Wavelength', wavelengthSchema,'wavelength');






// Get books

module.exports.getUsers = function(callback,limit){

    wavelength.find(callback).limit(limit);
}

// Get book

module.exports.getUserById = function(id,callback){

    wavelength.findById(id,callback);

}
