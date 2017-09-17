Ext.define('chapter4.BorderLayout', {
    alias: 'widget.chapter4-borderlayout',
    extend: 'Ext.container.Container',
    width: 400,
    height: 400,
    layout : 'border',         
    items : [ {
        region : 'north',      
        title : 'north',
        margins : 5,
        height : 100,          
        xtype : 'panel'
    }, {
        title : 'West',
        region : 'west',       
        margins : '0 5 0 5',
        width : 100,
        collapsible : true,    
        split : true,          
        titleCollapse : true   
    }, {
        title : 'Center',
        region : 'center'      
    }, {
        title : 'East',
        region : 'east',       
        margins : '0 5 0 5',
        flex :.5,              
        collapsible : true,
        collapsed : false      
    }, {
        title : 'South',
        region : 'south',      
        margins : '0 5 5 5',
        flex : .3,             
        split : true
    } ]
});
