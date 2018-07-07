var assert = require('assert');
var clients = require('restify-clients');

var client = clients.createJsonClient({
    url: 'http://localhost:3002',
    version: '~1.0'
});

client.get('/echo/mark', function (err, req, res, obj) {
    assert.ifError(err);
    console.log('Server returned: %j', obj);
});