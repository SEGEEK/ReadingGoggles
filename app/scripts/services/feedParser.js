'use strict';

angular.module('ReadingGooglesApp')
  .factory('feedParser', function ($http) {
    // Service logic
    
    // Public API here
    return {
      getFeedData: function (url) {        
        return $http.get('/feedData/' + encodeURIComponent(url) +'/');
      }
    };
  });
