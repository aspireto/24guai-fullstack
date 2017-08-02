var express = require('express'),
    path = require('path'),
    routes = require('./routes'),
    app = express(),
    mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/tfguai');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static(path.join(__dirname,'/angular')));
app.use(express.static(path.join(__dirname,'/public')));
// app.get('/',function(req, res){
//     res.render('index');
// });


routes(app);
app.listen(3000,function(){
    console.log('Listen on 3000');
});
