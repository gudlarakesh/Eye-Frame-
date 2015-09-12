---
---
(function(){

  angular.module('myEye', [])
    .controller('ProductsCtrl', function($http){
      product = this;
      $http.get('{{ "/js/data.json" | prepend: site.baseurl }}').
        success(function(data, status, headers, config) {
          product.all = data;
        }).
        error(function(data, status, headers, config) {
          console.log("Fetching Failed. Error: " + status);
        });
    });
})();