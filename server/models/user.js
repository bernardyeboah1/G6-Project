let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
//Creates a structure for the data for registering 
let User = mongoose.Schema({
  //username data and attributes
  username:
  {
    type:String,
    default:"",
    trim:true,
    required: 'Username is required'
  },
  //password data and attributes
  // password:
  // {
  //   type:String,
  //   default:"",
  //   trim:true,
  //   required: 'Password is required'
  // },
  //display name data and attributes
  displayName:
  {
    type:String,
    default:"",
    trim:true,
    required: 'DisplayName is required'
  },
  //email data and attributes
  email:
  {
    type:String,
    default:"",
    trim:true,
    required: 'Email is required'
  },
  //date user was registered
  created:
  {
    type:Date,
    default:Date.now
  },
  //date user credentials was updated
  update:
  {
    type:Date,
    default:Date.now
  }
},
{
  collection : "user"
}
)
// configure options for user model
let options = ({MissingPasswordError: "Wrong/Missing Password"});
User.plugin(passportLocalMongoose,options);
module.exports.User =  mongoose.model('User',User);
