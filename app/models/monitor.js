var _ = require('underscore');
var q=require('q');
var db=require('./db')
var monitor=db.monitor

module.exports = {
    
    save:function(body) {
        var defer=q.defer();
        monitor.findOneAndUpdate(body,body,{upsert:true}, function(err, doc){
            if(err) {console.log(err)}
            else {console.log(body)}
            return defer.resolve('success')
        })
        return defer.promise;
    },

    get:function(body) {
        var defer=q.defer();
        monitor.find(body,{},{sort:{utctime:1}},function(err,docs) { 
            if(err) {console.log(err)}
            else {
                // console.log(docs);
                return defer.resolve(docs)
            }
         });
        return defer.promise;
    },

    monitor:monitor
}

