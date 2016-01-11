'use strict';

function dataService($http, $q){
    
    function getCategories(){
        
        var deferred = $q.defer();  
        
        $http.get('config/categories.json')
            .then(function(response) {
                deferred.resolve(response);
            }, function(error){
                deffered.reject();
            });
         return deferred.promise;
    }
    
    function getProducts(){
        
        var deferred = $q.defer();  
        
        $http.get('config/products.json')
            .then(function(response) {
                deferred.resolve(response);
            }, function(error){
                deffered.reject();
            });
         return deferred.promise;
    }
    
    var service = {
        getProducts: getProducts,
        getCategories: getCategories
    };
    
    return service;
}