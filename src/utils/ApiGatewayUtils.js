const omitEmpty = require('omit-empty');

exports.default = function buildResponse({ statusCode = 200, body = {}, headers = {} }) {
  return {
    statusCode,
    headers: omitEmpty(Object.assign({}, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }, headers)),
    body: JSON.stringify(body)
  };
}

function buildRedirectResponse({ url }) {
  const headers = { Location: url };
  return buildResponse({ statusCode: 302, headers });
}

function redirectTo({ url, callback }) {
  return callback(null, buildRedirectResponse({ url }));
}

// exports.default = {
//   buildResponse,
//   buildRedirectResponse,
//   redirectTo
// };
