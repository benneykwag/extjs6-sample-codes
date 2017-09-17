Ext.define('chapter4.AccordionChild', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter4-accordionchild',
    initComponent: function () {
        this.callParent(arguments);
        this.on('expand', function (expandPanel) {        	// #1
            console.log('열린 패널은 :', this.title);		// #2
        })
    }
});