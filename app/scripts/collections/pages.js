define([
	'backbone',
	'models/page'
],
function( Backbone, Page ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Pages collection");
		},

		model: Page
		
	});
});
