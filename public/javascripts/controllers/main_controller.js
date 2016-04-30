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
}])
