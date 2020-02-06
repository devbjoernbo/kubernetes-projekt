// // redis
const util = require('util');
const redis = require('redis');

const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});

redisClient.hget = util.promisify(redisClient.hget);
redisClient.hset = util.promisify(redisClient.hset);

module.exports = redisClient;
