'use strict';

describe('Directive: baDepartInfo', function () {

  // load the directive's module
  beforeEach(module('nextBartApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ba-depart-info></ba-depart-info>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the baDepartInfo directive');
  }));
});
