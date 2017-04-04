var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider 
        .state('main', {
            url: '/main',
        }) 
        .state('home', {
            url: '/home',
            templateUrl: '/loading-animation/load.html'
        })       
        .state('page1', {
            url: '/page1',
            templateUrl: 'page1.html'            
        })
        .state('location', {
            url: '/location',
            templateUrl: 'location.html'            
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'gallery.html'            
        }) 
});

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
    