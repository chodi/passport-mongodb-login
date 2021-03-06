const isDev = process.env.NODE_ENV !== 'production';
const DBCRED = isDev ? require('../../SECRET') : '';
const DBuser = DBCRED ? DBCRED.DBCredUser : process.env.DBCredUser;
const DBpass = DBCRED ? DBCRED.DBCredPass : process.env.DBCredPass;

const DB_USER = DBuser || process.env.DBCredUser;
const DB_PASSWORD = DBpass || process.env.DBCredPass;

module.exports.connect = (mongoose) => {
  mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@ds137100.mlab.com:37100/zchodi-login`, { useMongoClient: true });

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user')(mongoose);
};
