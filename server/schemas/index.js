const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(
      'mongodb://root:nodejsbook@localhost:27017/admin',
      {
        dbName: 'corona'
      },
      error => {
        if (error) {
          console.log('mongoDB connect error');
        } else {
          console.log('mongoDB connect success');
        }
      }
    );
  };
  connect();
  mongoose.connection.on('error', error => {
    consoel.error('mongoDB connect error', error);
  });
  mongoose.connection.on('disconnected', error => {
    console.error('mongoDb connected. try connecting mongoDB');
    connect();
  });
};
