/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('KitchenSink.Application', {
    extend: 'KitchenSink.BaseApplication',
    controllers: [
        'Global'
    ],
    init: function () {
        Ext.create('KitchenSink.store.Navigation', {
            storeId: 'navigation'
        });
    },

    launch: function () {
        var view = 'KitchenSink.view.main.Main';
        this.setMainView({
            xclass: view
        });
        this.destroyLoader();
    },

    destroyLoader: function () {
        // css transitions지원여부.
        if (Ext.supports.Transitions) {
            this.callParent();
        }
    }
});
