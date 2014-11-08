function getGeoCity() {
    Session.set('reactiveLatLngObject', Geolocation.latLng());
    var reactiveLatLngObject = Session.get('reactiveLatLngObject');
    if (reactiveLatLngObject){
	var lat = reactiveLatLngObject.lat;
	var lng = reactiveLatLngObject.lng;
	Meteor.call('reverseGeo', lat, lng, errorOrCity);
    }
}
function errorOrCity(error, result) {
    if (error){
	console.log(error);
    }else{
	Session.set('city', result[0].city);
    }
}
Tracker.autorun(getGeoCity);

Template.app.helpers({
    city: function() {
	return Session.get('city');
    },
    bigText: function() {
	window.setTimeout(function(){
	    $('#bottom').bigtext();
	    Session.set('bigTextFinished', true);
	}, 0);
    },
    bigTextFinished: function() {
	return Session.get('bigTextFinished');
    },
    imageDataURI: function() {
	return Session.get('imageDataURI');
    },
    snapPic: function() {
	html2canvas($('#innerscreenshot'),{
	    onrendered: function(canvas) {
		Session.set('imageDataURI',canvas.toDataURL('image/png'));
	    }
	})
    }
});
