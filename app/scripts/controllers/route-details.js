'use strict';

angular.module('nextBartApp')
    .controller('RouteDetailsCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        '$activeSearch',
        function ($scope, $state, $stateParams, $activeSearch) {
            var idx = $stateParams.id;
            var route = $activeSearch.getRoute(idx);
            $scope.route = route;
            console.log(route);
        }
    ]);
