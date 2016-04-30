app.service('api', function($http){
this.getSwanson = function(){
  return http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function(response){
    return response
  })
}

  })
