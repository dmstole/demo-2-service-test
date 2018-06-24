module.exports = function () {

   const express = require('express');
   const cookieParser = require('cookie-parser');
   const bodyParser = require('body-parser');

   const app = express();

   const config = require('./config');
   app.config = config;

   const datasource = require('./datasource');
   app.datasource = datasource(app);

   app.use(bodyParser.urlencoded({
      extended: true
   }));
   app.use(bodyParser.json());
   app.use(cookieParser());

   require('../app/routes')(app);

   return app;

};