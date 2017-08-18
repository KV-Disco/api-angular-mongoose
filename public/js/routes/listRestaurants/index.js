/* global angular */

angular.module('restaurantsApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/listRestaurants/template.html',
        controller: 'restaurantController'
      })
  })
  