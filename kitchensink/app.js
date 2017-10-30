/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.enableAriaButtons = false;
Ext.application({
    extend: 'KitchenSink.Application',

    name: 'KitchenSink'
});
