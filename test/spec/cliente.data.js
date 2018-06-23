module.exports = function () {

   class ClienteData {
      static get() {
         return [{
            nome: "GDG",
            logradouro: "Avenida Aquarius",
            numero: 100,
            bairro: "Jardim Aquarius",
            cidade: "São José dos Campos",
            estado: "SP"
         }];
      }
   }

   return ClienteData;

};