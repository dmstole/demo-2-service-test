module.exports = app => {

   const _cliente = app.datasource.models.Cliente;

   app.get(`/clientes`, (req, res) => {
      _cliente.findAll({})
         .then(data => _responseDefault(res, null, data))
         .catch(err => _responseDefault(res, err, null));
   });

   app.get(`/cliente/:id`, (req, res) => {
      _cliente.findOne(req.params)
         .then(data => _responseDefault(res, null, data))
         .catch(err => _responseDefault(res, err, null));
   });

   app.post(`/cliente`, (req, res) => {
      _cliente.create(req.body)
         .then(() => _responseMensagem(res, null, "Criação realizada com sucesso."))
         .catch(err => _responseDefault(res, err, null));
   });

   app.put(`/cliente/:id`, (req, res) => {
      _cliente.update(req.body, { where: req.params })
         .then(() => _responseMensagem(res, null, "Atualização realizada com sucesso."))
         .catch(err => _responseDefault(res, err, null));
   });

   app.delete(`/cliente/:id`, (req, res) => {
      _cliente.destroy({ where: req.params })
         .then(() => _responseMensagem(res, null, "Remoção realizada com sucesso."))
         .catch(err => _responseDefault(res, err, null));
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