'use strict';

angular.module('ReadingGooglesApp')
  .controller('FeedCtrl', function ($scope, $routeParams) {      
    $scope.feedName = $routeParams.feedName;
  });
