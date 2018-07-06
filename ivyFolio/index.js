const Server = require('ivyframework');
require('./bootstrap');

var srv = new Server;

srv.start();

console.log('Ivy API is running : http://localhost: 3001');