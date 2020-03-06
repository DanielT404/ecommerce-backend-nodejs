const Database = require('./Database');
const Common = require('./Common');

console.log('Server running at http://127.0.0.1:8080/');
const con = new Common();
//console.log(con.__connection())
console.log(con.table('categories'))
console.log(con.select())