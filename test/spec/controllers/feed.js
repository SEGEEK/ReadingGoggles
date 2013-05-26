'use strict';

describe('Controller: FeedCtrl', function () {

  // load the controller's module
  beforeEach(module('ReadingGooglesApp'));

  var FeedCtrl,
    scope,
    feedParserMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    
    //create mock for Feed Parser ...
    feedParserMock = { 
        getFeedData : jasmine.createSpy().andReturn( {
            success: jasmine.createSpy()
     })};
    FeedCtrl = $controller('FeedCtrl', {
      $scope: scope,
      $routeParams: { feedName: "Dilbert" },
      feedParser : feedParserMock
    });
  }));

  it('should pull feedname from $routeParams', function () {
    expect(scope.feedName).toBe('Dilbert');
  });
  
  it('should use feedParser from Dilbert', function() {
    scope.changeFeed('Dilbert');
    expect(feedParserMock.getFeedData).toHaveBeenCalledWith(
        "http://feed.dilbert.com/dilbert/daily_strip");
  });
});
