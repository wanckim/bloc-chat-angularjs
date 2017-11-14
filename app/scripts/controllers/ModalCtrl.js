(function() {
  function ModalCtrl($uibModal) {
    this.animationsEnabled = true;

    this.open = function(size){
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });
    };
    this.toggleAnimation = function() {
      this.animationsEnabled = !this.animationsEnabled;
    };
  }

  function ModalInstanceCtrl($uibModalInstance) {
    this.ok = function() {
      $uibModalInstance.close();
    };
    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'ui.bootstrap', ModalCtrl])
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'ui.bootstrap', ModalInstanceCtrl]);
})();
