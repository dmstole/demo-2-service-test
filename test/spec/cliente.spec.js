describe('api de cliente', () => {

   const ClienteData = require('./cliente.data')();

   const Db = require('../../app/db')();
   const Cliente = require('../../app/models/Cliente')();

   let _cliente = null,
      _data = null,
      _clienteCriado = {};

   beforeEach(done => {
      _data = require('./cliente.data')().get();

      new Cliente(new Db()).esvaziar(() =>
         new Cliente(new Db()).criar(_data[0], (err, result) => {
            _clienteCriado.id = result.insertId;
            done(err);
         }));
   });

   describe('GET /clientes', function () {

      it('deveria retornar lista de clientes', function (done) {
         request
            .get('/clientes')
            .end(function (err, res) {
               expect(res.status).to.be.eql(200);
               expect(res.headers['content-type']).to.be.eql('application/json; charset=utf-8');
               expect(res.body.length).to.be.eql(1);
               done(err);
            });
      });

   });

   describe('GET /cliente/id', () => {

      it('deveria retornar cliente por id', done => {

         new Cliente(new Db()).obter({}, cb);

         function cb(err, result) {
            request
               .get(`/cliente/${result[0].id}`)
               .end(function (err, res) {
                  expect(res.status).to.be.eql(200);
                  expect(res.headers['content-type']).to.be.eql('application/json; charset=utf-8');
                  expect(res.body.length).to.be.eql(1);
                  done(err);
               });
         }

      });

   });

   describe('POST /cliente', function () {

      it('deveria criar cliente', function (done) {

         const _novoCliente = _data[0];
         _novoCliente.nome = "Brasil";

         new Cliente(new Db()).criar(_novoCliente, cb);

         function cb(err, result) {
            request
               .post(`/cliente`)
               .send(_novoCliente)
               .end(function (err, res) {
                  expect(res.status).to.be.eql(200);
                  expect(res.headers['content-type']).to.be.eql('application/json; charset=utf-8');
                  expect(res.body.mensagem).to.be.eql("Criação realizada com sucesso.");
                  done(err);
               });
         }

      });

   });

   describe('PUT /cliente', function () {

      it('deveria atualizar cliente', function (done) {

         let _clienteAtualizado = _data[0];

         function _cbAtualizacao(err, cliente) {
            cliente.nome = "Brasil";
            request
               .put(`/cliente`)
               .send(cliente)
               .end(function (err, res) {
                  expect(res.status).to.be.eql(200);
                  expect(res.headers['content-type']).to.be.eql('application/json; charset=utf-8');
                  expect(res.body.mensagem).to.be.eql("Atualização realizada com sucesso.");
                  done(err);
               });
         }

         function _obter(id) {
            new Cliente(new Db()).obter({
               id: id
            }, _cbAtualizacao);
         }

         function _cbCriacao(err, result) {
            if (err) throw err;
            _obter(result.insertId);
         }

         new Cliente(new Db()).criar(_clienteAtualizado, _cbCriacao);

      });

   });

   describe('DELETE /cliente/id', function () {

      it('deveria deletar cliente', function (done) {

         request
            .delete(`/cliente/${_clienteCriado.id}`)
            .end(function (err, res) {
               expect(res.status).to.be.eql(200);
               expect(res.headers['content-type']).to.be.eql('application/json; charset=utf-8');
               expect(res.body.mensagem).to.be.eql("Remoção realizada com sucesso.");
               done(err);
            });

      });

   });



});