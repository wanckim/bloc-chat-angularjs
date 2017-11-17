(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    this.rooms = Room.all;

    // this.messages = Message;

    this.allMessages = function(id) {
      this.messages = Message.getByRoomId(id);
    };

    this.animationsEnabled = true;

    this.open = function(){
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        size: 'md',
      });
    };

    this.toggleAnimation = function() {
      this.animationsEnabled = !this.animationsEnabled;
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
