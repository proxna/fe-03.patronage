(function() {
  'use strict';

  angular
    .module('pawelg')
    .controller('UsersController', UsersController);
angular.module.factory('conn',function($http){
	return{
		getData: function(){
			return $http.get('https://api.github.com/users').then(function(result){
				return result.data;
			});
		}
	}
});
  /** @ngInject */
  function UsersController($timeout, webDevTec, toastr, $http, conn) {
    var vm = this;

    vm.users = [];
    vm.classAnimation = '';
    vm.creationDate = 1451841549221;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getUsers();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
	function getUsers(){
		conn.getData().then(function(data){
			vm.users=data;
		});
	}
  }
})();
