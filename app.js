var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');    
    $stateProvider 
        .state('main', {
            url: '/main'
        }) 
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })       
        .state('page1', {
            url: '/page1',
            templateUrl: 'page1.html'            
        })                
});

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
    