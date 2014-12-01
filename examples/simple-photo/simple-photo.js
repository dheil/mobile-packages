
 if(Photos.find().count===0){
  console.log("Keine Bilder in der Datenbank vorhanden.");
 }
 Template.body.helpers({
    photo: function () {
      return Session.get("photo");
    },
    getPhotoCount: function (){
      return Photos.find().count();
    }
  });

  Template.body.events({
    /*'click button': function () {
      var cameraOptions = {
        width: 800,
        height: 600
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {

      	Photos.insert({time :new Date().getTime(),data :data});

        Session.set("photo", data);
      });
    }*/
  });


var app = {

    initialize: function() {
        this.bindEvents();
    },
	    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
        receivedEvent: function(id) {
        if (id == 'deviceready'){
            //app.createGallery();
        }

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    }, 
    takePicture: function () {

    	alert("test");
      var cameraOptions = {
        width: 800,
        height: 600
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {

      	Photos.insert({time :new Date().getTime(),data :data});

        Session.set("photo", data);
      });
    }
}