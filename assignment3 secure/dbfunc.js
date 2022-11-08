//000859536
//David VanAsselberg
//11/07/2022

const {dbConn} = require('./db.config');


function readList(req,res){
    
        dbConn.query("SELECT * From tableName",function(err,result){
        
            if(err){
                console.log(err)
                const newListItems = ["error"];
                res.render('list',{newListItems});
            }else{
                const newListItems = result
                res.render('list',{newListItems});
            }
        });
}

module.exports = {readList}