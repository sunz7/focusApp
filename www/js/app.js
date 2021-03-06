// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ui.router', 'ionic.utils'])

.run(function($ionicPlatform, $localstorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    //the two lines of commented code below is for test localStorage
    // $localstorage.set('name', 'Max');
    // console.log($localstorage.get('name'));
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  openFB.init({appId: '1632169413664865'});
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('login', {
    url: "/",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  .state('success', {
    url: '/acts/:actId/:mins/play/success',
    templateUrl: 'templates/success.html',
    controller: 'SuccessCtrl'
  })
  .state('failure', {
    url: '/acts/:actId/:mins/play/failure',
    templateUrl: 'templates/failure.html',
    controller: 'FailureCtrl'
  })
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.activities', {
    url: '/activities',
    views: {
      'activities': {
        templateUrl: 'templates/activities.tpl.html',
        controller: 'ActCtrl'
      }
    }
  })


    .state('tab.challenge', {
      url: '/challenge',
      views: {
        'tab-challenge': {
          templateUrl: 'templates/tab-challenge.html',
          controller: 'ChallengeCtrl'
        }
      }
    })

    .state('tab.reflection', {
      url: '/reflection',
      views: {
        'tab-reflection': {
          templateUrl: 'templates/tab-reflection.html',
          controller: 'ReflectionCtrl'
        }
      }
    })
    .state('tab.act-detail', {
      url: '/acts/:actId',
      views: {
        'activities': {
          templateUrl: 'templates/act-detail.tpl.html',
          controller: 'ActDetailCtrl'
        }
      }
    })

    .state('play', {
      url: '/acts/:actId/:mins/play',
      templateUrl: 'templates/tab-play.html',
      controller: 'PlayCtrl'
    })

    .state('tab.add', {
      url: '/activities/add',
      views: {
        'activities': {
          templateUrl: 'templates/tab-add.html',
          controller: 'AddCtrl'
        }
      }
    })
    .state('tab.edit', {
      url: '/acts/:actId/edit',
      views: {
        'activities': {
          templateUrl: 'templates/tab-edit.html',
          controller: 'EditCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
