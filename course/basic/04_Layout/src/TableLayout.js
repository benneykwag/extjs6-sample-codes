Ext.define('chapter4.TableLayout', {
    alias: 'widget.chapter4-tablelayout',
    extend: 'Ext.panel.Panel',
    title : 'Table Layout',
    width : 500,
    height : 300,
    layout : {
        type : 'table', // #1
        columns : 4     // #2
    },
    items : [ {
        height : 100,
        html : '헤더 <br/>Colspan:4, Rowspan:1',
        colspan : 4
    }, {
        width : 100,
        height : 200,
        html : '메뉴 <br/>Colspan:1, Rowspan:2',
        rowspan : 2
    }, {
        width : 300,
        height : 100,
        html : '컨텐츠 상단<br/>Colspan:2, Rowspan:1',
        colspan : 2
    }, {
        width : 100,
        height : 200,
        html : '우측영역<br/>Colspan:1, Rowspan:2',

        rowspan : 2
    }, {
        html : '컨텐츠하단 1<br/><br/>Colspan:1, Rowspan:1',
        height : 100,
        width : 150
    }, {
        html : '컨텐츠하단 2<br/><br/>Colspan:1, Rowspan:1',
        height : 100,
        width : 150
    } ]
});
