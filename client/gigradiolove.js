function errorOrCity(error, result) {
    if (error){
	console.log(error);
    }else{
	Session.set('city', result[0].city);
    }
}
function getGeoCity() {
    Session.set('reactiveLatLngObject', Geolocation.latLng());
    var reactiveLatLngObject = Session.get('reactiveLatLngObject');
    if (reactiveLatLngObject){
	var lat = reactiveLatLngObject.lat;
	var lng = reactiveLatLngObject.lng;
	Meteor.call('reverseGeo', lat, lng, errorOrCity);
    }
}
Tracker.autorun(getGeoCity);

function fitText() {
    var bottom = document.querySelector('#bottom');
    bottom.style.fontSize="5.3em";
    $('#bottom').bigtext();
    var input = $('#cityinput').val().toUpperCase();
    Session.set('city', input);
}

Template.app.events({
    'keyup #cityinput, blur #cityinput, focus #cityinput, keypress #cityinput': fitText
});

Template.app.helpers({
    city: function() {
	return Session.get('city');
    },
    bt: function() {
	window.setTimeout(function(){$('#bottom').bigtext(); Session.set('btf', true);}, 2000);
    },
    btf: function() {
	return Session.get('btf');
    }
});
