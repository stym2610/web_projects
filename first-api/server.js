var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));
var incredients = [
    {
        "id":"22rr3",
        "text":"milk"
    },

    {
        "id":"121dd",
        "text":"banana"
    },

    {
        "id":"02011",
        "text":"butter"
    }
];

 app.get('/' , function(request, response){
        response.send(incredients);
 });

 app.post('/', function(request, response){
     var incredient = request.body;
     if(!incredient || incredient.text === ""){
         response.status(500).send({error : "your text is  empty..."})
     } else {
         incredients.push(incredient);
         response.status(200).send(incredients);
     }
 });

 app.put('/:incredientId', function(request, response){
        var objectFound = false;
        var newtext = request.body.text;
        if(!newtext || newtext === ""){
            response.status(500).send({error : "text can not be empty"});
        } else {
            for(var x = 0 ; x < incredients.length ; x++) {
                var ing = incredients[x];
                if(ing.id == request.params.incredientId){
                    incredients[x].text = newtext;
                    objectFound = true;
                    break;
                }
            }
            if(!objectFound){
                response.status(200).send({error : "id not matched"});
            } else{
                response.status(500).send(incredients);
            }
            
        }
 });

app.delete('/:incredientId', function(request , response){
    var objectFound  = false;
    var ing;
    for(var x = 0 ; x < incredients.length ; x++){
        ing = incredients[x];
        if(ing.id == request.params.incredientId){
            incredients.splice(x , 1);
            objectFound = true;
            break;
        }
    }
    if(!objectFound){
        response.status(200).send({error : "id not matched"});
    } else {
        response.status(500).send(incredients);
    }
});

 app.listen(3000, function(){
        console.log("my first API running at port 3000..!!");
 });