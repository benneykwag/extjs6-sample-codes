Ext.define('chapter4.VBoxLayout', {
    alias: 'widget.chapter4-vboxlayout',
    extend: 'Ext.panel.Panel',
    title: 'Vbox Layout',
    width: 300,
    height: 400,
    layout: {
        type: 'vbox',
        padding: 10
    },
    items: [
        {
            xtype: 'panel',
            title: '첫번째 패널',
            html: '너비 150px <br>높이 70px',
            height: 90,
            width: 150
        },
        {
            xtype: 'panel',
            title: '두번째 패널',
            width: 100,
            html: '높이는 가변적이다. <br>너비 100px',
            flex: 1
        },
        {
            xtype: 'panel',
            title: '세번째 패널',
            html: '너비 200px <br>높이 100px',
            height: 100,
            width: 200
        }
    ]
});
