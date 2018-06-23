module.exports = () => {
   class Db {

      constructor() {
         var mysql = require('mysql');
         this.connection = mysql.createConnection({
            host: process.env.DBHOST,
            port: process.env.DBPORT,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBNAME
         });
      }

      executeQuery(sql, dados, done) {

         console.log(sql);
         this.connection.connect(err => {
            this.connection.query(sql, dados, (err, data) => {
               this.connection.destroy();

               if (err) {
                  console.log(`error ${JSON.stringify(err)}`);
                  done(err, null);
               } else {
                  data = JSON.stringify(data);
                  data = JSON.parse(data);
                  done(null, data);
               }
            });
         });
      }

   }

   return Db;
};