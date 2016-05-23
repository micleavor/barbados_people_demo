angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('PlaylistsCtrl', function($scope) {
  
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Rock and Roll', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'Just Drums', id: 7 }
  ];

})

.controller('PlaylistCtrl', function($scope, $stateParams) {

  //$scope.individual_playlist_id = $stateParams.playlistId;

  $scope.individual_playlist_id = $stateParams.playlistId;

})


.controller('People', function($scope, PeoplesData){

  $scope.my_peoples = PeoplesData;

  $scope.addPerson = function() {
    var name = prompt("Who do you want to add?");
    
  
    if (name) {
      $scope.people.$add({
        "name": name
      });
    }
  };


})

.factory("PeoplesData", function($firebaseArray) {
  var itemsRef = new Firebase("https://people-directory2.firebaseio.com/people");
  return $firebaseArray(itemsRef);
})

.controller('Person', function($scope, $stateParams, $firebaseObject) {

  // Pass in same ID that we're given in the URL
  $scope.person_id = $stateParams.person_id;

  // Make another call out to API server
  var itemsRef = new Firebase("https://people-directory2.firebaseio.com/people/"+$stateParams.person_id);
  $scope.person = $firebaseObject(itemsRef);

});





