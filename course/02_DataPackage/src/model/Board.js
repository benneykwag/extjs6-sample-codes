Ext.define('DataPackage.model.Board', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'userName',
            type: 'string'
        },
        {
            name: 'role',
            type: 'string'
        },
        {
            name: 'content',
            type: 'string'
        },
        {
            name: 'createDate',
            type: 'date',
            dateFormat: 'Y.m.d'
        },
        {
            name: 'updateDate',
            type: 'date',
            dateFormat: 'Y.m.d'
        },
        {
            name: 'readCnt',
            type: 'int'
        },
        {
            name: 'deleteYn',
            type: 'boolean',
            defaultValue: false
        }
    ],

    validators: {
        title: 'presence',        // #1
        content: {
            type: 'length', min: 2, max: 10 //#2
        },
        deleteYn: {
            type: 'inclusion', list: [true, false]  // #3
        },
        role: [
            {   type: 'exclusion', list: ['Admin', 'Manager']} // #4
        ],
        userName: {
            type: 'format', matcher: /^[ㄱ-힣"'\\{\\}\s]+$/   // #5
        }
    }
});