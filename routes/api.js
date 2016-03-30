var userDetails = require('../app/models/users');
var dummyProfiles = require('../app/models/dummyProfiles');
var UserActualData = require('../app/models/userData');


module.exports = function(app,express){

	var api = express.Router();

  // Get request for getting Dummy Profiles

  api.get('/wavelength/wavelength_restapi/v1/get_dummy_profiles', function(req,res){
    dummyProfiles.find({}, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);


    });


  });


  // Post request for storing user data
  api.post('/wavelength/wavelength_restapi/v1/post_user_details',function(req,res){
    var userdata = new UserActualData({
      name :req.body.name,
      email: req.body.email,
      profile_pic: req.body.profile_pic,
      social_provider: req.body.social_provider,
      gender:req.body.gender,
      score: req.body.score,
      age:req.body.age,
      status:req.body.status,
      location: req.body.location,
      keyword1: req.body.keyword1,
      keyword2: req.body.keyword2,
      keyword3: req.body.keyword3
      

    });
    userdata.save(function(err){

      if(err) {
        res.send(err);
        return;
      }
      res.json(userdata, 'User created Succesfully!!');
    }); 

  });

  
  // Get request for getting data from database

  api.get('/users', function(req,res){
    userDetails.find({}, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);


    });


  });

  api.get('/users/matchingProfiles', function(req,res){

    userDetails.find({},'email matchingPeople', function (err, person) {
      if(err){

        throw err;
      }
      res.json(person);
          
    });    

  });         



  // Getting single document as by id
  api.get('/users/:_id', function(req,res){
    userDetails.findById(req.params._id,function(err,user){
      if(err){
        throw err;
      }
      res.json(user);
    });

  });
  return api
  
}