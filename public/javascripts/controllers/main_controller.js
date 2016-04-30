app.controller('mainController', function($scope, $http, $interval, $rootScope) {
var currentSlide = -1;
var background = ['1', '2', '3', '4', '5', '6', '7', '8']

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


      function advanceBackground(){
        ++currentSlide;
        if(currentSlide >= background.length){
          currentSlide = 0;
        }
        $scope.background = "images/"+currentSlide+".jpg";


      }

      var intervalID = setInterval(advanceBackground, 3000)







$interval( function() {$scope.getQuotes(); }, 7500);
$interval( function() {$scope.randomUser(); }, 7500);

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

})
