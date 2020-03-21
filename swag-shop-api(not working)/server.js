// ########### not working ###########
var app = require('express')();
var body_parser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://139.59.86.190/swag-shop', {useNewUrlParser: true , useUnifiedTopology: true});

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended : false}));

app.listen(3000 , function(){
    console.log("swag shop api running at port 3000..!!!");
}); 
