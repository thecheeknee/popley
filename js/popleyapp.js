var app = angular.module('popleyApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })
        .state('catalogs', {
            url: '/catalogs',
            templateUrl: 'partials/catalogs.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'partials/categories.html'
        })
        .state('collections', {
            url: '/collections',
            templateUrl: 'partials/collections.html'
        });
});
