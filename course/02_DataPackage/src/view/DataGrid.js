Ext.define('DataPackage.view.DataGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'cla-datagrid',
    requires: ['DataPackage.model.Board'],
    columns: [
        {
            text: '이름',
            dataIndex: 'name'
        }
    ],
    store: {
        model: 'DataPackage.model.Board',   // #2
        proxy: {    // #3
            type: 'ajax',
            url: 'data.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        autoLoad: true
    }
});