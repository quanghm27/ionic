angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Satellizer configuration that specifies which API
  // route the JWT should be retrieved from




  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.thTChLu', {
    url: '/them-the',
    views: {
      'tab2': {
        templateUrl: 'templates/thTChLu.html',
        controller: 'thTChLuCtrl'
      }
    }
  })

  .state('tabsController.thNgK', {
    url: '/thong-ke',
    views: {
      'tab3': {
        templateUrl: 'templates/thNgK.html',
        controller: 'thNgKCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('NgNhP', {
    url: '/login',
    templateUrl: 'templates/NgNhP.html',
    controller: 'NgNhPCtrl'
  })

  .state('NgK', {
    url: '/dang-ky',
    templateUrl: 'templates/NgK.html',
    controller: 'NgKCtrl'
  })

  .state('tabsController.thanhToN', {
    url: '/thanh-toan',
    views: {
      'tab1': {
        templateUrl: 'templates/thanhToN.html',
        controller: 'thanhToNCtrl'
      }
    }
  })

  .state('NgKThNhCNg', {
    url: '/sign-up-success',
    templateUrl: 'templates/NgKThNhCNg.html',
    controller: 'NgKThNhCNgCtrl'
  })

  .state('trangCh', {
    url: '/home',
    templateUrl: 'templates/trangCh.html',
    controller: 'trangChCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});