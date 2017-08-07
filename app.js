var express = require('express'),
    path = require('path'),
    routes = require('./routes'),
    app = express(),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
    mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/tfguai');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(session({
	secret : 'you shall no pass',
	resave : false,
	saveUninitialized: false,
	store : new MongoStore({
		url : 'mongodb://localhost:27017/tfguai',
		ttl : 30 * 24 * 60 * 60
	}),
}));

// app.use(function(req, res, next){
//     console.log(req.session.sign);
//     console.log('==============');
//     next();
// })

app.use(express.static(path.join(__dirname,'/angular')));
app.use(express.static(path.join(__dirname,'/public')));

app.get('/igigi',function(req, res){
        res.sendFile(path.join(__dirname,'/angular','/admin','allposts.html'));
        // res.render('allposts');
    })

routes(app);
app.listen(3000,function(){
    console.log('Listen on 3000');
});
