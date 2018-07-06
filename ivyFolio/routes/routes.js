const Route = use('Router');

/**
 * List of routes
 */
Route.get('/', 'HomeController@home');
Route.get('/:id', function (parameter) {
    return parameter.id;
});
Route.post('/user', function (parameter) {
    return "This is user post method";
});
Route.post('/user/:id', function (parameter) {
    return "This is user post method with " + parameter.id;
});
Route.put('/user', function (parameter) {
    return "This is user put method";
});
Route.delete('/user', function (parameter) {
    return "This is user delete method";
});
Route.get('/json', function (parameter) {
    return {
        "good": "testing",
        "is": "here"
    };
});
Route.get('/home', function() {
    return "this goes through multiple middleware";
}, { middleware: ['auth', 'www'] });
