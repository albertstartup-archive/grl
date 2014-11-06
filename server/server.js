Meteor.methods({
    reverseGeo: function(lat, lng) {
	var geo = new GeoCoder();
	var result = geo.reverse(lat, lng);
	return result;
    }
});
