var monitor=require('../models/monitor.js');
var fs = require('fs');


module.exports = function(app) {

    app.post(app.conf.routePrefix + '/monitor', function(req, res, next) {
        monitor.save(req.body).then(function(data){
            res.status(200).send(data);
        }).fail(function(error){
            res.send(error);
        })            
    });

    app.post(app.conf.routePrefix + '/getmonitor', function(req, res, next) {
        monitor.get(req.body).then(function(data){
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(data);
        }).fail(function(error){
            res.send(error);
        })            
    });

}