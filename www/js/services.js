angular.module('starter.services', [])

.factory('Acts', function($localstorage) {
  // Might use a resource here that returns a JSON array
  return {
    all: function() {
      return $localstorage.getObject('activities');
    },
    add: function(newAct) {
      var acts1 = $localstorage.getObject('activities');
      //var newActs = [];
      acts1.push(newAct);
      //console.log(newAct);
      return $localstorage.setObject('activities', acts1);
    },
    remove: function(act) {
      acts.splice(acts.indexOf(act), 1);
    },
    get: function(actId) {
      var acts2 = $localstorage.getObject('activities');
      for (var i = 0; i < acts2.length; i++) {
        if (acts2[i].id === parseInt(actId)) {
          return acts2[i];
        }
      }
      return null;
    },
    setAll: function(acts){
      return $localstorage.setObject('activities', acts);
    }
  };
});
