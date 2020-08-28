// ********
// *Index*
// ********

//Define myApp ng-app (mainApp)
var mainApp = angular.module("mainApp", ['ngRoute']);

// Define my route for my single web page
mainApp.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeController'
	})
	.when('/api', {
		templateUrl: 'api.html',
		controller: 'apiController'
	})
	.when('/another', {
		templateUrl: 'another.html',
		controller: 'anotherPageController'
	})
	.otherwise({
		redirectTo: '/home'
	});
});

// ********
// **Home**
// ********

//Define Home Controller -> inside where i put and then show my model
mainApp.controller('homeController', function($scope) {

});

// ********
// **Api***
// ********

mainApp.controller('apiController', function($scope, $http) { //Inlude $scope (my model) and $http (my ajax call)
	$scope.teams = '';
    // Like Ajax request for Api
    $http({
       method : "GET",
	   url : 'https://www.haloapi.com/metadata/h5/metadata/team-colors',
	   headers: { 'Ocp-Apim-Subscription-Key': 'd66314df41554194b9c32cf1fe1ed73f', 'Accept-Language': 'en'},
    })
    .then(function mySuccess(response) {
    $scope.teams = response.data.slice(5);
    console.log(response.data);
    },
    function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});


// *********
// *Another*
// *********

mainApp.controller('anotherPageController', function($scope) {
	// $scope -> this is my Model
    // This scope works only inside this Controller
    $scope.inputFirst = function(input){
        if (input === 'YEP') {
            $('#container-another-page h1').html('Great work!')
        } else {
            $('#container-another-page h1').html('"' + 'Try to write... YEP' + '"');
        }
    }
});
