/* global angular */

angular.module('restaurantsApp')
  .controller('restaurantController', function ($scope, $http, RestaurantService) {
    $scope.page = 1

    function loadRestaurants () {
      RestaurantService.loadRestaurants($scope.page)
        .then(function (response) {
          $scope.restaurants = response.data
        })
    }

    loadRestaurants()

    function pageDown () {
      console.log('enter pageDown')
      if ($scope.page > 1) {
        $scope.page--
        loadRestaurants()
      }
    }

    function pageUp () {
      console.log('enter pageUP')
      $scope.page++
      loadRestaurants()
    }

    $scope.pageDown = pageDown
    $scope.pageUp = pageUp
  })
