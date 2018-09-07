(function() {
  function AuthCtrl(Auth, $state) {
    this.user = {
      email: '',
      password: ''
    };

    this.login = function() {
      Auth.$signInWithEmailAndPassword(this.user.email, this.user.password).then(function(auth) {
        $state.go('home');
      }, function(error) {
        this.error = error;
      });
    };

    this.register = function() {
      Auth.$createUserWithEmailAndPassword(this.user.email, this.user.password).then(function(user) {
        $state.go('home');
      }, function(error) {
        this.error = error;
      });
    };
  }

  angular
    .module('blocChat')
    .controller('AuthCtrl', ['Auth', '$state', AuthCtrl]);
})();
