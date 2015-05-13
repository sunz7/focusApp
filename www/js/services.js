angular.module('starter.services', [])

.factory('Acts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var acts = [{
    id: 0,
    name: 'Python',
    startAt: '01/01/2015',
    hours: 30,
    completed: 20,
    image: 'https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/u18.png'
  },     {id: 1,
    name: 'Reading',
    startAt: '05/01/2015',
    hours: 40,
    completed: 20,
    image: 'https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/u61.png'
  },    { id: 2,
    name: 'Running',
    startAt: '02/28/2015',
    hours: 25,
    completed: 20,
    image: 'https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/u71.png'
  }];

  return {
    all: function() {
      return acts;
    },
    remove: function(act) {
      acts.splice(acts.indexOf(act), 1);
    },
    get: function(actId) {
      for (var i = 0; i < acts.length; i++) {
        if (acts[i].id === parseInt(actId)) {
          return acts[i];
        }
      }
      return null;
    }
  };
});
