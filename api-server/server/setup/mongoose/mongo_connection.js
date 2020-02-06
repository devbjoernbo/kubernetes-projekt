//const models = require('./database/mongoDB/models');
const mongoose = require('mongoose');
// instantiate mongoose-schemas
require('./schemas/mongooseSchemas');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://mongo:27017/the_capitalist_v1', {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .catch(error => console.log(error));

mongoose.connection
  .once('open', () =>
    console.log('API-server is connected to MongoDB')
  )
  .on('error', error =>
    console.log(
      'API-server recevied an error connecting to MongoDB: ',
      error
    )
  );
