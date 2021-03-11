const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(
      `mongodb://localhost:27017/inventoryElectron`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      (err, res) => {
        if (err) throw err;
        console.log('Database is created');
      },
  );
  mongoose.Promise = global.Promise;
};
