'use strict';

angular.module('ReadingGooglesApp')
  .controller('FeedCtrl', function ($scope, $routeParams, feedParser) {
    $scope.feedName = $routeParams.feedName;
    $scope.feedList = [ 
        { name: "Dilbert", url: "http://feed.dilbert.com/dilbert/daily_strip"},
        { name: "Dinosaur Comics", url: "http://www.rsspect.com/rss/qwantz.xml"},
        { name: "Real Life Comics", url: "http://www.reallifecomics.com/index.xml" }];
    $scope.changeFeed = function( feed) {
        var feedItem = $scope.feedList.find( function(i) {
            return feed === i.name;
        });
        if( feedItem ) {
            feedParser.getFeedData(feedItem.url).success( function( val) {
                $scope.feedData = val;
            });
        }
    }
    $scope.changeFeed($scope.feedName);
  });
