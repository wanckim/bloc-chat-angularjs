(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/modal/username.html',
        controller: 'UsernameCtrl',
        controllerAs: 'username'
      })
    }
  }

  angular
    .module('blocChat')
    .run('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies]);
})();
