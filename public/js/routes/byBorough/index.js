/* global angular */

angular.module('restaurantsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/borough/:query', {
        templateUrl: 'js/routes/byBorough/template.html',
        controller: 'BoroughController'
      })
  })
