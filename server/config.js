const dbConnection = {
  database: 'mongodb://kadkins:password1@ds243345.mlab.com:43345/gifterdb',
  dbOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
};

module.exports = dbConnection;