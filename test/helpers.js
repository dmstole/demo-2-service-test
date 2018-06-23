process.env.DBHOST = "localhost";
process.env.DBPORT = "3306";
process.env.DBUSER = "root";
process.env.DBPASSWORD = "lucas3011";
process.env.DBNAME = "demogdg";

const chai = require('chai');
const supertest = require('supertest');

const server = require('../config/server')();

global.app = server;
global.expect = chai.expect;
global.request = supertest(server);