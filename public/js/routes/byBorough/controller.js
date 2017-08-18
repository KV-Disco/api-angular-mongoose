/* global angular */

angular.module('restaurantsApp')
.controller('BoroughController', function ($scope, $http, RestaurantService, $routeParams) {
  let query = $routeParams.query
  $scope.page = 1

  byBorough()

  function byBorough () {
    RestaurantService.byBorough(query, $scope.page)
      .then(function (response) {
        $scope.restaurants = response.data
        console.log($scope.restaurants)
      })
  }

  function pageDown () {
    console.log('enter pageDown')
    if ($scope.page > 1) {
      $scope.page--
      byBorough()
    }
  }

  function pageUp () {
      // if ($scope.page < $scope.numPages) {
    console.log('enter pageUP')
    $scope.page++
    byBorough()
      // }
  }

  $scope.pageDown = pageDown
  $scope.pageUp = pageUp
})
.controller('SearchController', function ($scope, $location) {
  $scope.getQuery = function () {
    let query = $scope.query
    $location.path('/borough/' + query)
  }
})
