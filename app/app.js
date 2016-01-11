'use strict';

var askMeApp = angular.module('AskMeApp', ['ngRoute']);

askMeApp.service("dataService", ['$http', '$q', dataService]);
askMeApp.controller("AppController", ['$scope', AppController]);
askMeApp.controller("HomeController", ['$scope', 'dataService', HomeController]);

askMeApp.directive("checkBox", checkboxDirective);
askMeApp.directive("itemPreview", itemPreviewDirective);

askMeApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : ''
            })

            // route for the brands page
            .when('/brands', {
                templateUrl : 'views/brands.html',
                controller  : ''
            })

            // route for the designers page
            .when('/designers', {
                templateUrl : 'views/designers.html',
                controller  : ''
            })
        
            // route for the contact page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : ''
            })
        
            // route for the home page
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : ''
            });
    });
