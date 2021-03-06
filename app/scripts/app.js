'use strict';

angular
    .module('nextBartApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngTouch',
        'ngAnimate',
        'angularMoment',
        'ui.router'
    ])
    .constant('$config', {
        app: {
            name: 'Bart Catch'
        },
        package: {
            name: 'com.bartcatch.app'
        },
        map: {
            linkType1: 'https://www.google.com/maps/dir/Current+Location/',
            linkType2: 'https://maps.google.com/maps?saddr=Current+Location&dirflg=w&daddr='
        }
    })
    .config(function ($stateProvider, $urlRouterProvider, $compileProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('dashboard', {
                url: '/',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            })
            .state('details', {
                url: '/details/:id',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/route-details.html',
                        controller: 'RouteDetailsCtrl'
                    }
                }
            })
            .state('stations', {
                url: '/stations/:mode',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/station-list.html',
                        controller: 'StationListCtrl'
                    }
                }
            })
            .state('fare', {
                url: '/fare',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/fare-calculator.html',
                        controller: 'FareCalculatorCtrl'
                    }
                }
            })
            .state('location', {
                url: '/locate',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/find-bart-station.html',
                        controller: 'FindBartStationCtrl'
                    }
                }
            })
            .state('menu', {
                url: '/menu',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/menu-panel.html',
                        controller: 'MenuPanelCtrl'
                    }
                }
            })
            .state('schedules', {
                url: '/schedules',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/schedules.html',
                        controller: 'SchedulesCtrl'
                    }
                }
            })
            .state('routes', {
                url: '/routes',
                views: {
                    'HomeView@': {
                        templateUrl: '/views/route-map.html',
                        controller: 'RouteMapCtrl'
                    }
                }
            });
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|geo|javascript):/);
    })
    .run(function ($rootScope, $state, $deviceEvents, $station) {
        $rootScope.$state = $state;
        $station.stations().then(function (stations) {
            $station.cachedStations = stations;
        });
        $deviceEvents.init();
        document.body.style.minHeight = document.body.clientHeight + 'px';
    });