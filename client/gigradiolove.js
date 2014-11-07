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
    bt: function() {
	window.setTimeout(function(){$('#bottom').bigtext(); Session.set('btf', true);}, 2000);
    },
    btf: function() {
	return Session.get('btf');
    }
});
