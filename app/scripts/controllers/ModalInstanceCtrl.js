(function() {
  function ModalInstanceCtrl($uibModalInstance, Room) {
    var RoomObject = Room;

    this.ok = function(room) {
      RoomObject.add(room);
      $uibModalInstance.close({$value: room});
    };
    this.cancel = function() {
      $uibModalInstance.dismiss({$value: 'cancel'});
    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
