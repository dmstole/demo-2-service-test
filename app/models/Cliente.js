module.exports = app => {

   class Cliente {

      constructor(db) {
         this.db = db;
         this.tabela = "cliente";
      }

      criar(modelo, done) {

         let _sql = `insert into ${this.tabela} (nome,logradouro,numero,bairro,cidade,estado) values (?,?,?,?,?,?); `;
         const _data = [];
         _data.push(modelo.nome);
         _data.push(modelo.logradouro);
         _data.push(modelo.numero);
         _data.push(modelo.bairro);
         _data.push(modelo.cidade);
         _data.push(modelo.estado);
         this.db.executeQuery(_sql, _data, done);
      }

      atualizar(modelo, done) {

         const _sql = `update ${this.tabela} set nome=?,logradouro=?,numero=?,bairro=?,cidade=?,estado=? where id=?;`;
         const _data = [];
         _data.push(modelo.nome);
         _data.push(modelo.logradouro);
         _data.push(modelo.numero);
         _data.push(modelo.bairro);
         _data.push(modelo.cidade);
         _data.push(modelo.estado);
         _data.push(modelo.id);
         this.db.executeQuery(_sql, _data, done);
      }

      delete(modelo, done) {

         const _sql = `delete from ${this.tabela} where id=?;`;
         const _data = [];
         _data.push(modelo.id);
         this.db.executeQuery(_sql, _data, done);
      }

      esvaziar(done) {

         const _sql = `delete from ${this.tabela} where id > 0;`;
         this.db.executeQuery(_sql, null, done);
      }

      obter(filtro, done) {

         let _data = [],
            _where = "where ";

         if (filtro) {
            if (filtro.id) {
               _data.push(filtro.id);
               _where += `id=?`;
            }
         }

         if (_where == "where ") {
            _where = "";
         }

         const _sql = `select * from ${this.tabela} ${_where};`;
         this.db.executeQuery(_sql, _data, done);
      }
   }

   return Cliente;

};