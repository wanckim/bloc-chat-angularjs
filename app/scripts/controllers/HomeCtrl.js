(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    this.rooms = Room.all;

    // this.messages = Message;

    this.roomTitle = "Select Chat Room";

    this.allMessages = function(id, title) {
      this.messages = Message.getByRoomId(id);
      this.roomTitle = title;
    };

    this.animationsEnabled = true;

    this.open = function(){
      var createRoom = $uibModal.open({
        animation: this.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modal/create-room.html',
        controller: 'CreateRoomCtrl',
        controllerAs: 'createRoom',
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
