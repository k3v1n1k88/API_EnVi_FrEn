var express = require('express'),
    low = require('lowdb'),
    fileSync = require('lowdb/adapters/FileSync');

var router = express.Router();

var dbEnViAdapter = new fileSync('./db/dbEnVi.json');
var dbFrEnAdapter = new fileSync('./db/dbFrEn.json');

var dbEnVi = low(dbEnViAdapter);
var dbFrEn = low(dbFrEnAdapter);


router.post('/request',(req,res)=>{
    var word = request.word;
    var srcLan = request.source;
    var desLan = request.destination;

    var wordReturn;

    if(srcLan === "en" && desLan === 'vi'){
        wordReturn = dbEnVi.get(word);
        res.json(wordReturn);
    }
    else if(srcLan === "fr" && desLan === "en"){
        wordReturn = dbFrEn.get(word) ;
        res.json(wordReturn);
    }
    else{
        res.statusCode = 404;
        res.json({
            msg: "not found"
        });
    }
});
console.log(dbEnVi.get("123"))
module.exports = router;

