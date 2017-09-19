/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'myapp.Application',

    name: 'myapp',

    requires: [
        // This will automatically load all classes in the myapp namespace
        // so that application classes do not need to require each other.
        'myapp.*'
    ],

    // The name of the initial view to create.
    mainView: 'myapp.view.main.Main'
});
