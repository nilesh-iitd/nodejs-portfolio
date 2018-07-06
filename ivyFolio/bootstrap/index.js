const process = require('process'),
      path = require('path');

/**
 * Returns a path to the node_modules dir.
 *
 * @return {*}
 */
global.modules_path = function () {
    return path.join(process.cwd(), 'node_modules');
};

let Helper = use('Ivy/Helper');

require('./ServiceLoader');
require('./ConfigLoader');
Helper.requireFromFolder('/ivyFolio/app/middleware');
Helper.requireFromFolder('/ivyFolio/app/controller');
require('./MiddlewareLoader');
require('../routes/routes');