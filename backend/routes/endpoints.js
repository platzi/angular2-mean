var router = require('express').Router(),
    jwt = require('jwt-simple'),
    createToken = require('./createToken'),
    moment = require('moment'),
    cors = require('cors'),
    secret = require('../config/tokenSecret').secret;


var collection;

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/platzi-angular-mean'
    , function(err, db){
        if(!err){
            console.log("MONGODB connect");
            collection = db.collection('tickets');
        }
        else{
            console.log(err);
        }
});

function ensureAuthorized(req, res, next){
    console.log(req.headers);
    if(req.headers.authozation){
        console.log('->' + req.headers.authozation);
        try{
            var payload = jwt.decode(req.headers.authozation, secret);
        }
        catch(err){
            res.set('Content-Type', 'application/json').send(JSON.stringify({
                status: 403,
                message: 'error 1'
            }));
        }
        // check expiration
        if (payload.exp > moment().unix()){
            console.log(loggedUsers);
            next();
        }
    }
}

router.get('/tickets', cors(), function(req, res){
    "use strict";
    collection.find().toArray(function (err, items){
        var resultado;
        if (!err){
            resultado = {
                status: 200,
                result : items
            }
        }
        else{
            resultado = {
                status:500,
                result : err
            }
        }
        res.set('Content-Type', 'application/json').send(JSON.stringify(resultado));
    })
});

router.post('/ticket', cors(), function(req, res){
    "use strict";
    console.log(req.body.id);
    collection.findOne({id: parseInt(req.body.id) }, function(err, item){
        console.log(item);
        var resultado;
        if(!err){
            resultado = {
                status : 200,
                result: item
            }
        }
        else{
            resultado = {
                status : 500,
                result : err
            }
        }
        res.set('Content-Type', 'application/json').send(JSON.stringify(resultado));
    })
});

router.post("/ticketUpdate", cors(), function(req, res){
    "use strict";
    collection.update(
        { id: parseInt(req.body.id) },
        {
            $set:{
                titulo: req.body.titulo,
                estado: req.body.estado
            }
        },
        {w:1},
        function(err, result){
            var resultado;
            if(!err){
                resultado = {
                    status:200,
                    result: result
                }
            }
            else{
                resultado = {
                    status: 500,
                    result : err
                }
            }
            res.set('Content-Type', 'application/json').send(JSON.stringify(resultado));
        }
    )
});

router.post('/ticketDelete', cors(), function(req, res){
    "use strict";
    console.log(req.body.id);
    collection.remove(
        { id: parseInt(req.body.id) },
        {w:1},
    function(err, result){
        var resultado;
        if (!err){
            resultado = {
                status: 200,
                result: result
            }
        }
        else{
            resultado = {
                status: 500,
                result: err
            }
        }
        res.set('Content-Type', 'application/json').send(JSON.stringify(resultado))
    }
    )
})

module.exports = router;