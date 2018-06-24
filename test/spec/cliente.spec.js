describe('api de cliente', () => {

   const _cliente = app.datasource.models.Cliente;

   const _data = require('./cliente.data')().get()[0];

   beforeEach(done => {
      _cliente.destroy({
            where: {}
         })
         .then(() => _cliente.create(_data))
         .then(result => _data.id = result.dataValues.id)
         .then(() => done())
         .catch(err => done(err));
   });

   describe('GET /clientes', () => {
      it('deveria retornar lista de clientes', done => {
         request
            .get('/clientes')
            .end((err, res) => {
               expect(res.status).to.be.eql(200);
               expect(res.headers['content-type']).to.be.eql('application/json; charset=utf-8');
               expect(res.body.length).to.be.eql(1);
               done(err);
            });
      });
   });

   describe('GET /cliente/{id}', () => {
      it('deveria retornar o cliente', done => {
         request
            .get(`/cliente/${_data.id}`)
            .end((err, res) => {
               expect(res.status).to.be.eql(200);
               expect(res.headers['content-type']).to.be.eql('application/json; charset=utf-8');
               expect(res.body.id).to.be.eql(_data.id);
               done(err);
            });
      });
   });

   describe('POST /cliente', () => {
      it('deveria criar um cliente', done => {

         let _novoCliente = {
            nome: _data.nome,
            logradouro: _data.logradouro,
            numero: _data.numero,
            bairro: _data.bairro,
            cidade: _data.cidade,
            estado: _data.estado
         };

         request
            .post('/cliente')
            .send(_novoCliente)
            .end((err, res) => {
               expect(res.body.mensagem).to.be.eql("Criação realizada com sucesso.");
               done(err);
            });
      });
   });

   describe('PUT /cliente', () => {
      it('deveria atualizar um cliente', done => {

         let _atualizaCliente = {
            id: _data.id,
            nome: _data.nome,
            logradouro: _data.logradouro,
            numero: _data.numero,
            bairro: _data.bairro,
            cidade: _data.cidade,
            estado: _data.estado
         };

         request
            .put(`/cliente/${_atualizaCliente.id}`)
            .send(_atualizaCliente)
            .end((err, res) => {
               expect(res.body.mensagem).to.be.eql("Atualização realizada com sucesso.");
               done(err);
            });
      });
   });

   describe('DELETE /cliente', () => {
      it('deveria deletar um cliente', done => {
         request
            .delete(`/cliente/${_data.id}`)
            .end((err, res) => {
               expect(res.body.mensagem).to.be.eql("Remoção realizada com sucesso.");
               done(err);
            });
      });
   });

});