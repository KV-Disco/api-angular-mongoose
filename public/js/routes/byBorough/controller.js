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
    if ($scope.page > 1) {
      $scope.page--
      byBorough()
    }
  }

  function pageUp () {
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
