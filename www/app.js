var app = angular.module('flapperNews', ['ui.router']);

// routes
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
		  .state('home', {
		  	url: '/home',
		  	templateUrl: 'home.html',
		  	controller: 'MainController'
		  })
		  .state('manifestos', {
			  url: '/manifestos/{id}',
			  templateUrl: '/manifestos.html',
			  controller: 'ManifestosController'
			});
		$urlRouterProvider.otherwise('home')
	}
]);

// controllers
app.controller('MainController', [
	'$scope',
	'manifestos',
	function($scope, manifestos){
		$scope.manifestos = manifestos.manifestos;
		$scope.addManifesto = function(){
			if(!$scope.name || $scope.name==''){return;};
			$scope.manifestos.push({name: $scope.name, happiness: 0, completion: 0});
			$scope.name = '';
		}
		$scope.incrementHappiness = function(manifesto){
			manifesto.happiness += 1;
		}
	}
]);

app.controller('ManifestosController', [
	'$scope',
	'$stateParams',
	'manifestos',
	function($scope, $stateParams, manifestos){
		$scope.manifesto = manifestos.manifestos[$stateParams.id]
	}
]);

app.factory('manifestos', [
  function(){
  	var o = {
  		manifestos: [
				{
					name: "Free Wifi",
				  organizer: 'Aam Aadmi Party',
				  completion: 20, happiness: 20,
				  image: 'http://images.jagran.com/naidunia/free-wifi-delhi_13_02_2015.jpg'
				},
				{
					name: "Clean Water in Every Home",
				  organizer: 'Aam Aadmi Party',
				  completion: 20, happiness: 10,
				  image: 'http://images.jagran.com/naidunia/free-wifi-delhi_13_02_2015.jpg'
				},
				{
					name: "Every child educated",
				  organizer: 'Aam Aadmi Party',
				  completion: 30, happiness: 40,
				  image: 'http://images.jagran.com/naidunia/free-wifi-delhi_13_02_2015.jpg'
				},
				{
					name: "Delhi - Drug Free",
				  organizer: 'Aam Aadmi Party',
				  completion: 30, happiness: 20,
				  image: 'http://www.hindustantimes.com/Images/popup/2015/2/260215-pg01a.jpg'
				}
			]
  	}
		return o;
  }
]);