var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var readres = [];

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assigntwo");
  //Find all documents in the customers collection:
  dbo.collection("students").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    readres = result;
    readres.forEach(function(student){
      console.log(student.email);
    })
    db.close();
  });
});
