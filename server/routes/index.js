// Coding/Commenting Done By Anish Mistry
var express = require('express');
var router = express.Router();
const passport = require('passport');
let DB = require('../config/db');
let userModel = require('../models/user');
let User = userModel.User;

 /* login page. */

 router.get('/login',function(req,res,next){
    if(!req.user)
    {
      res.render('auth/login',
      {
        title:'Login',
        message: req.flash('loginMessage'),
        displayName: req.user ? req.user.displayName:''
      })
    }
    else{
      return res.redirect('/home',)
    }
  })
  
   /* post router for  page. *
 
   router.post('/login',function(req,res,next){
       passport.authenticate('local',function(err,User,info){
           // server error
           if(err)
           {
               return next(err);
           }
           // login error
           if(!User)
           {
               req.flash('loginMessage',
               'AuthenticationError');
               return res.redirect('/login')
           }
           req.login(User,(err)=>{
               if(err)
               {
               return next(err)
               }
               return res.redirect('/itemlist');
           })
       })(req,res,next)
       })

 /* register page. */
   router.get('/register',function(req,res,next){
       if(!req.user)
       {
       res.render('auth/register',
       {
           title:'Register',
           message: req.flash('registerMessage'),
           displayName: req.user ? req.user.displayName: ''
       })
       }
       else{
       return res.redirect('/home')
       }
   })

   /* post register for  page. */

   router.post('/register', function(req,res,next){
       let newUser = new User({
         username: req.body.username,
         // password: req.body.password,
         email: req.body.email,
         displayName: req.body.displayName
       })
       User.register(newUser, req.body.password,(err) => {
         if(err)
         {
           console.log("Error in inserting new User");
           if(err.name =='UserExistError')
           {
             req.flash('registerMessage',
             'Registration Error : User already Exist'
           )}
           return res.render('auth/register',
           {
             title:'Register',
             message: req.flash('registerMessage'),
             displayName: req.user ? req.user.displayName:''
           })
         }
         else{
           return passport.authenticate('local')(req,res,()=>{
             res.redirect('/itemlist');
           })
         }
       })
     })

 /* logout page. */

    router.get('/logout',function(req,res,next){
    req.logout(function(err){
        if(err)
        {
        return next(err);
        }
    })
    res.redirect('/home')
    })


    /* home page. */
    router.get('/', (req, res, next)=> {
        res.render('index', {  title: 'Home', displayName: req.user ? req.user.displayName:'' }); //Render The Home Page
    });

    /* home page. */
    router.get('/home',  (req, res, next)=> {
        res.render('index', {  title: 'Home', displayName: req.user ? req.user.displayName:'' });  // Render The Home Page 
    });
    

    /* contact page. */
    router.get('/contact', (req, res, next)=> {
        res.render('contact', { title: 'Contact Us?', displayName: req.user ? req.user.displayName:'' });  //Render The Contact Page
    });

 


module.exports = router;
