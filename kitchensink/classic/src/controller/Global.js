Ext.define('KitchenSink.controller.Global', {
    extend: 'Ext.app.Controller',

    config: {
        routes  : {
            ':id': {
                action: 'handleRoute',
                before: 'beforeHandleRoute'
            }
        }
    },

    beforeHandleRoute: function(id, action) {
        action.resume();
    },

    handleRoute: function(id) {
        debugger;
    }
});