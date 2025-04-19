var mysql= require("mysql2")
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Pr@mysql1",
    database: "userdb"
});
con.connect( function(err){
    if(err) throw err;
    console.log("Connected")
});
module.exports=con;

