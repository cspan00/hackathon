app.controller('mainController', function($scope, $http, $interval, $rootScope) {
var currentSlide = -1;
var background = ['1', '2', '3', '4', '5', '6', '7']

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
        console.log("images/"+currentSlide+".jpg");

      }

      var intervalID = setInterval(advanceBackground, 3000)







$interval( function() {$scope.getQuotes(); }, 7000);

})
