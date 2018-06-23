process.env.DBHOST = "localhost";
process.env.DBPORT = "3306";
process.env.DBUSER = "root";
process.env.DBPASSWORD = "lucas3011";
process.env.DBNAME = "demogdg";

const app = require('./config/server')();

app.listen(3000, function () {
   console.log('running server');
});