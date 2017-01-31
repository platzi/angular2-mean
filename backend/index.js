var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors");

var app = express();

//connect database
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/platzi-angular", function(err, db) {
  if(!err) {
    console.log("MongoDb Connect");
    /*
        var ticketCollection = db.collection('tickets');
        var ticket1 = {
                'id': 1, 
                'titulo': 'no me funciona la impresora', 
                'estado': 'in progress'
            };
        var ticket2 = {'id': 2, 'titulo': 'no me funciona la computadora', 'estado': 'finish' };
        var ticketSerie = [
                {'id': 3, 'titulo': 'no me funciona el celular', 'estado': 'in progress'},
                {'id': 4, 'titulo': 'no me funciona una lampara', 'estado': 'really'}  
            ];

        ticketCollection.insert(ticket1);
        ticketCollection.insert(ticket2, {w:1}, function(err, result) {});
        ticketCollection.insert(ticketSerie, {w:1}, function(err, result) {});
    */
  }
});

var endpoints = require('./routes/endpoints');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.options("*", cors());

app.use("/", endpoints);


var routes = express.Router();

app.use(routes);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Escuchando el puerto " + port);
})
