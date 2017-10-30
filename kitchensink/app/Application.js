/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('KitchenSink.BaseApplication', {
    extend: 'Ext.app.Application',

    defaultToken: 'all',

    destroyLoader: function () {
        var top     = Ext.get('loadingSplashTop'),
            wrapper = Ext.fly('loadingSplash');

        top.on('transitionend', wrapper.destroy, wrapper, { single: true });

        wrapper.addCls('app-loaded');
    }
});
