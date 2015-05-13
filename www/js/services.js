angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Python',
    startAt: '01/01/2015',
    hours: 30,
    image: '/../img/u18.png'
  },     {id: 1,
    name: 'Reading',
    startAt: '05/01/2015',
    hours: 40,
    image: '/../img/u61.png'
  },    { id: 2,
    name: 'Running',
    startAt: '02/28/2015',
    hours: 25,
    image: '/../img/u71.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
