// create connection to mongoDB and instantiate mongoose schemas
require('./mongoose/mongo_connection');

// initialize passport authentication
require('./passport/passport_auth');

// import apollo-server
const apolloServer = require('./apollo/apollo_server');

module.exports = { apolloServer };
