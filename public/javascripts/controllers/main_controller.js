app.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $scope.randomUser = function() {
    $http({
      method: 'GET',
      url: "https://randomuser.me/api/",
      dataType: 'json'
    }).then(function(result){
      console.log(result);
    })
  }
}])
