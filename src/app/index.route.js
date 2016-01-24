(function() {
  'use strict';

  angular
    .module('pawelg')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
	$stateProvider
		.state('users',{
			url: '/users',
			templateUrl: 'app/users/users.html',
			controller: 'UsersController',
			controllerAs: 'users'
		});
	$stateProvider
		.state('about',{
			url: '/about',
			templateUrl: 'app/about/about.html',
			controller: 'AboutController',
			controllerAs: 'about'
		})
    $urlRouterProvider.otherwise('/');
  }

})();
