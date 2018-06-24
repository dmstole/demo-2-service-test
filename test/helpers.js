const chai = require('chai');
const supertest = require('supertest');

const server = require('../config/server')();

global.app = server;
global.expect = chai.expect;
global.request = supertest(server);