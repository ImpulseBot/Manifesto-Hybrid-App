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
		$scope.manifesto = manifestos.manifestos[$stateParams.id];
		$scope.addComment = function(){
			if(!$scope.author || $scope.author=='' || !$scope.body || $scope.body==''){return;};
			$scope.manifesto.comments.push({author: $scope.author, body: $scope.body});
			$scope.author = '';
			$scope.body = '';
		}
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
				  image: 'http://images.jagran.com/naidunia/free-wifi-delhi_13_02_2015.jpg',
				  comments: [
				  	{author: 'user-1', body: 'lorem ipsum dolor'},
				  	{author: 'user-2', body: 'lorem ipsum dolor'},
				  	{author: 'user-3', body: 'lorem ipsum dolor'}
				  ]
				},
				{
					name: "Clean Water in Every Home",
				  organizer: 'Aam Aadmi Party',
				  completion: 20, happiness: 10,
				  image: 'http://images.jagran.com/naidunia/free-wifi-delhi_13_02_2015.jpg',
				  comments: [
				  	{author: 'user-1', body: 'lorem ipsum dolor'},
				  	{author: 'user-2', body: 'lorem ipsum dolor'},
				  	{author: 'user-3', body: 'lorem ipsum dolor'}
				  ]
				},
				{
					name: "Every child educated",
				  organizer: 'Aam Aadmi Party',
				  completion: 30, happiness: 40,
				  image: 'http://images.jagran.com/naidunia/free-wifi-delhi_13_02_2015.jpg',
				  comments: [
				  	{author: 'user-1', body: 'lorem ipsum dolor'},
				  	{author: 'user-2', body: 'lorem ipsum dolor'},
				  	{author: 'user-3', body: 'lorem ipsum dolor'}
				  ]
				},
				{
					name: "Delhi - Drug Free",
				  organizer: 'Aam Aadmi Party',
				  completion: 30, happiness: 20,
				  image: 'http://www.hindustantimes.com/Images/popup/2015/2/260215-pg01a.jpg',
				  comments: [
				  	{author: 'user-1', body: 'lorem ipsum dolor'},
				  	{author: 'user-2', body: 'lorem ipsum dolor'},
				  	{author: 'user-3', body: 'lorem ipsum dolor'}
				  ]
				}
			]
  	}
		return o;
  }
]);