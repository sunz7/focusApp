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
      var acts4 = $localstorage.getObject('activities');
      acts4.splice(acts4.indexOf(act), 1);
      $localstorage.setObject('activities', acts4);
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
    getAll: function(acts){
      return $localstorage.setObject('activities', acts);
    },
    updateOne: function(act){
      var acts3 = $localstorage.getObject('activities');
      for(var key in acts3){
        if(act.id === acts3[key].id){
          acts3[key] = act;
        }
      }
      $localstorage.setObject('activities', acts3);

    },

  };
})
.factory("Challenges", function($localstorage){
  return{
      update: function(cha){
        var chas = $localstorage.getObject('challenges');
        for(var key in chas){
          if(cha.id === chas[key].id){
            chas[key] = cha;
          }
        }
        $localstorage.setObject('challenges', chas);
      },
      getAll: function(){
        return $localstorage.getObject('challenges');
      }
  }
});
