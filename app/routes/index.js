module.exports = app => {
   return {
      cliente: require('./cliente')(app)
   };
};