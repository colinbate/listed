

jQuery(function () {
	Backbone.couch_connector.config.db_name = "listed-test";
	Backbone.couch_connector.config.ddoc_name = "listed_test";
	Backbone.couch_connector.config.base_url = "http://127.0.0.1:5984";
	
	Backbone.couch_connector.config.global_changes = false;
	
	_.templateSettings = {
		interpolate : /\{\{(.+?)\}\}/g
	};
	
	var ListItem = Backbone.Model.extend({
		initialize : function(){
			if (!this.get('date')) {
				this.set({'date': new Date().getTime()});
			}
		}
	});
	
	var ListItemCollection =  Backbone.Collection.extend({
		model: ListItem
	});
	
	var ListModel = Backbone.Model.extend({
		defaults: {
			title: 'Untitled'
		},
		initialize : function(){
			if (!this.get('created')) {
				this.set({'created': new Date().getTime()});
			}
			if (!this.get('items')) {
				this.set('items', new ListItemCollection());
			}
	    }
	});
	
	
});