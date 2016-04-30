app.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $scope.randomUser = function() {
    $http({
      method: 'GET',
      url: "https://randomuser.me/api/",
      dataType: 'json'
    }).then(function(result){
      $scope.firstName = result.data.results[0].name.first
      $scope.lastName = result.data.results[0].name.last
      $scope.user = result.data.results[0].picture.medium;
    })
  }

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

}])
