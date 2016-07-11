Ext.define('Rambox.model.Service', {
	 extend: 'Ext.data.Model'

	,identifier: 'sequential'
	,proxy: {
		 type: 'localstorage'
		,id: 'services'
	}

	,fields: [{
		 name: 'id'
		,type: 'int'
	},{
		 name: 'position'
		,type: 'int'
	},{
		 name: 'type'
		,type: 'string'
	},{
		 name: 'logo'
		,type: 'string'
	},{
		 name: 'name'
		,type: 'string'
	},{
		 name: 'url'
		,type: 'string'
	},{
		 name: 'align'
		,type: 'string'
		,defaultValue: 'left'
	},{
		 name: 'notifications'
		,type: 'boolean'
		,defaultValue: true
	},{
		 name: 'muted'
		,type: 'boolean'
		,defaultValue: false
	},{
		 name: 'js_unread'
		,type: 'string'
		,defaultValue: ''
	},{
		 name: 'firebase_key'
		,type: 'int'
	}]
});
