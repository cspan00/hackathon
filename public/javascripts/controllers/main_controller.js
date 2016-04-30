app.controller('mainController', function($scope, $http, $interval, $rootScope) {


$scope.getQuotes = function(){
      $http({
        method: 'GET',
        url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
        dataType: 'json'
      }).then(function(result){
        console.log(result);
        $scope.quote = result["data"][0]
      })

  }





$interval( function() {$scope.getQuotes(); }, 7000);

})
