/* global angular */

angular.module('restaurantsApp')
  .factory('RestaurantService', function ($http) {
    function loadRestaurants (page) {
      let url = `/api/restaurants?page=${page}`
      return $http.get(url)
    }

    function byBorough (borough, page) {
      let url = `/api/restaurants/borough/${borough}?page=${page}`
      return $http.get(url)
    }

    return {
      loadRestaurants: loadRestaurants,
      byBorough: byBorough

    }
  })
