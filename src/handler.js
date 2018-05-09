const Promise = require('bluebird');
const ApiGatewayUtils = require('./utils/ApiGatewayUtils');

exports.default = function version(event, context, callback) {
  console.log('Event', JSON.stringify(event));
  return Promise.resolve('0.0.1')
    .then(v =>
      callback(null, ApiGatewayUtils({ statusCode: 200, body: { version: v } }))
    )
    .catch(err => callback(err));
};
