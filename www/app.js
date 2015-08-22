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
				  image: 'http://res.cloudinary.com/chi6rag/image/upload/v1440221266/Manifesto/pixel77-free-vector-wifi-icon-2006-min.jpg',
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
				  image: 'http://i.istockimg.com/file_thumbview_approve/49454876/3/stock-illustration-49454876-water-drop-flat-icon-vector-illustration-eps10.jpg',
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
				  image: 'http://www.tfingi.com/wp-content/uploads/2013/05/flaticon-book.jpg',
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
				  image: 'http://us.cdn3.123rf.com/168nwm/megawinter/megawinter1501/megawinter150102667/35423865-vector-drug-jar-flat-icon.jpg',
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

app.factory('manifestoService', function($http) {
  var o = {
    getManifesto: function(id) {
      return (
        $http.get('http://localhost:3000/manifestos/' + id);
      )
    },
    createManifesto: function(name, ) {
      return (
        $http.get('http://localhost:3000/manifestos/' + id);
      )
    }
  };
  return o;
})
