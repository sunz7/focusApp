angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function($window) {
  var today = new Date();
    var activities = [{
      id: 0,
      name: 'Python',
      category: 'Study',
      starts: today,
      ends: today,
      hours: 30,
      completed: 20,
      image: 'https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/study.png'
    }];

    var challenges = [{
      id: 0,
      name: 'TV',
      goal: 'Less than 3 hours per day',
      completed: 0
    },{
      id: 2,
      name: 'PS4',
      goal: 'Less than 3 hours per day',
      completed: 2
    }];
  
  //save testObject to localStorage as fake dataitem
    $window.localStorage['activities'] = JSON.stringify(activities);
    $window.localStorage['challenges'] = JSON.stringify(challenges);
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);