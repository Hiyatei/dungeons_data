'use strict';

angular.module('DungeonApp', ['ngSanitize', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/', // landing page
			templateUrl: 'partials/home.html'
		})
		.state('weapons', {
			url: '/weapons',
			templateUrl: 'partials/weapons.html',
			controller: 'WeaponCtrl'
		})	
		.state('spells', {
			url: '/spells',
			templateUrl: 'partials/spells.html',
			controller: 'SpellCtrl'
		})
		.state('feats', {
			url: '/feats',
			templateUrl: 'partials/feats.html',
			controller: 'FeatCtrl'
		})
		.state('armor', {
			url: '/armor',
			templateUrl: 'partials/armor.html',
			controller: 'ArmorCtrl'
		})


	$urlRouterProvider.otherwise('/');

})

.controller('WeaponCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.sortCriteria = 'name';
	$scope.seeMore = false;

	$http.get('data/weapons.json').then(function(response) {
 		$scope.weapons = response.data;
 	});
}])

.controller('SpellCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.sortCriteria = 'level';
	$scope.seeMore = false;
	$scope.filterclass = '';

	$http.get('data/spells.json').then(function(response) {
 		$scope.spells = response.data;
 	});
}])