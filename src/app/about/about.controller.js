(function() {
  'use strict';

  angular
    .module('pawelg')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.author="Paweł Gajzler";
	vm.image_url="avatar.jpg";
	vm.github_link="https://github.com/proxna/";
    vm.classAnimation = '';
    vm.creationDate = 1451841549221;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

  }
})();
