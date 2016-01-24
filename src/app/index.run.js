(function() {
  'use strict';

  angular
    .module('pawelg')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
