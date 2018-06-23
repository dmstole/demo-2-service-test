module.exports = app => {

   const _root = "clientes";

   const Db = require('../db')();
   const Cliente = require('../models/Cliente')();

   app.get(`/clientes`, (req, res) => {

      const _cliente = new Cliente(new Db());

      _cliente.obter({}, (err, result) =>
         _responseDefault(res, err, result));

   });

   app.get(`/cliente/:id`, (req, res) => {

      const _cliente = new Cliente(new Db());

      _cliente.obter(req.params, (err, result) =>
         _responseDefault(res, err, result));

   });

   app.post(`/cliente`, (req, res) => {

      const _cliente = new Cliente(new Db());

      _cliente.criar(req.body, (err, result) =>
         _responseMensagem(res, err, "Criação realizada com sucesso."));
   });

   app.put(`/cliente`, (req, res) => {

      const _cliente = new Cliente(new Db());

      _cliente.atualizar(req.body, (err, result) =>
         _responseMensagem(res, err, "Atualização realizada com sucesso."));
   });

   app.delete(`/cliente/:id`, (req, res) => {

      const _cliente = new Cliente(new Db());

      _cliente.atualizar(req.params, (err, result) =>
         _responseMensagem(res, err, "Remoção realizada com sucesso."));
   });

   function _responseDefault(res, err, result) {
      if (err) {
         res.status(500).json(err);
      } else {
         res.status(200).json(result);
      }
   }

   function _responseMensagem(res, err, descricao) {
      if (!err) {
         res.status(200).json({
            mensagem: descricao
         });
      } else {
         res.status(500).json({
            mensagem: "Erro na operação!",
            error: err
         });
      }
   }

};