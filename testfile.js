var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var readres = [];
var exists = false;
var emails = [];

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assigntwo");
  //Find all documents in the customers collection:
  dbo.collection("students").find({}).toArray(function(err, result) {
    if (err) throw err;
    
    readres = result;
    emails = listStudents();
    //console.log(emails);
    checkStudentExists(emails,"geralduoj@gmail.com");
    db.close();
  });
});

function listStudents(){
  var emailArr = [];

  readres.forEach(function(student){
    emailArr.push(student.email);
  })
  return emailArr;
}

function checkStudentExists(arr,word){
  var studentExists = false;

  arr.every(function(email){

    switch (email.includes(word)) {
      case true:
        console.log("True");
        break;
      case false:
        console.log("False");
        break;
    }
    
  })
}
