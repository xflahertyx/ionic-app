angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', function($scope) {
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  };
  $scope.toast = function(value) {
    return value * 3;
  }

  $scope.nearDepth = function(cOfC, focal, aperture, distance) {
    console.log(cOfC);
    var hyperFocal = (parseFloat(focal) * parseFloat(focal)) / (parseFloat(aperture) * parseFloat(cOfC)) + parseFloat(focal);
    console.log(hyperFocal);
    return ((hyperFocal - focal) * distance) / (hyperFocal + distance - (2 * focal));
  }

}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

// .controller('calcCtrl', function($scope) {
//   $scope.parseFloat = function(value) {
//     return parseFloat(value);
//   };
// });
