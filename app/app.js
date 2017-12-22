angular.module('crypt', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: './app/view/home/home.html',
                controller: 'HomeController'
            })


    }]);
