class HomeController {
    home() {
        return "Welcome to Ivy framework.";
    }
}

namespace('App/Controller/HomeController', HomeController);