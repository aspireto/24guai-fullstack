var router = require('express').Router(),
    multer = require('multer'),
    fs = require('fs'),
    upload = multer({dest : './uploads/'}),
    mongoose = require('mongoose'),
    signSchema = require('../models/sign');

var Sign = mongoose.model('Sign',signSchema);

router.route('/')
      .get(function(req,res){
          Sign.find(function(err,posts){
              if(err) throw err;
              res.json(posts);
          })
      })
      .post(upload.any(),function(req, res, next){
          if(req.files){
            req.files.forEach(function(file){
                var filename = (new Date()).valueOf() + '-' + file.originalname;
                fs.rename(file.path, './public/images/'+filename,function(err){
                    if(err) throw err;

                    var sign = new Sign({
                        username:   req.body.username,
                        image:      filename,
                        tel:        req.body.tel,
                        sex:        req.body.sex,
                        idcard:     req.body.idcard,
                        birthday:   req.body.birthday,
                        driver:     req.body.driver,
                        models:     req.body.models,
                        license:    req.body.license,    
                        amount:     req.body.amount,    
                        level:      req.body.level,      
                        group:      req.body.group,
                        price:      req.body.price,
                        workaddress:req.body.workaddress,
                        address:    req.body.address,
                        now:        req.body.now
                    });
                    sign.save(function(err,result){
                        if(err){
                            throw(err);
                            // console.log(err);
                        } 
                        res.json(result);
                    });
                })
            })
          }
      });

router.route('/:id')
      .get(function(req, res){
            res.send(req.params);
          Sign.findById(req.params.id,function(err,post){
              if(err) throw err;
            //   res.json(post);
          })
      });


module.exports = router;