/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'cla.Application',

    name: 'cla',

    requires: [
        // This will automatically load all classes in the cla namespace
        // so that application classes do not need to require each other.
        'cla.*'
    ],

    // The name of the initial view to create.
    mainView: 'cla.view.main.Main'
});
