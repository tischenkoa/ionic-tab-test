angular.module('starter.controllers')
  .controller('loginCtrl', function ($scope, $state, $timeout, AuthorizationService) {
      $scope.checkLogin = function (login, password) {
        console.log(login, password);
        if (AuthorizationService.auth(login, password)) {
          $scope.errorPassword = false;
          return $state.go('tab.dash');
        } else {
         return $scope.errorPassword = true;
        }
      }
    }
  );

