Ext.define('KitchenSink.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navigation',

    requires: [
    ],

    constructor: function (config) {
        var me = this,
            items = [],
            ver = Ext.getVersion().parts;
        me.ver = new Ext.Version(ver[0] + '.' + ver[1] + '.' + ver[2]); // just 3-digits

        items.push(me.getNavItemsGeneral());
        items = {
            text: 'All',
            id: 'all',
            expanded: true,
            description: '<h2>Welcome To Ext JS Kitchen Sink!</h2>' +
                'This application showcases all the components in Ext JS and demonstrates ' +
                'how easy it is to start using them in your applications!',

            children: items
        };


        me.callParent([Ext.apply({
            root: items
        }, config)]);
    },

    fixUp: function (items, tier, parent) {
        var me = this,
            item = items,
            i, since;

        if (Ext.isArray(items)) {
            for (i = items.length; i-- > 0;) {
                item = items[i];

                if (item.compat === false) {
                    items.splice(i, 1);
                } else {
                    me.fixUp(item, tier, parent);

                    if (parent && (item.isNew || item.hasNew)) {
                        parent.hasNew = true;
                    }
                }
            }
        } else {
            since = item.since;
            if (since) {
                item.sinceVer = since = new Ext.Version(since);
                item.isNew = since.gtEq(me.ver);
            }

            tier = item.tier || (item.tier = tier || 'standard');

            if (!('iconCls' in item)) {
                item.iconCls = 'icon-' + item.id;
            }

            if (item.children) {
                me.fixUp(item.children, tier, item);
            }
        }
    },

    getNavItemsGeneral: function () {
        var me = this;
        return {
            text: 'Components',
            id: 'components',
            expanded: true,
            iconCls: 'icon-state-saving',
            description: 'Ext JS provides a wide variety of other, simpler components.',

            children: [
                me.getNavItemsButtons()
            ]
        };
    },
    getNavItemsButtons: function () {
        return {
            text: 'Buttons',
            id: 'buttons',

            description: 'Buttons are a utilitarian component of Ext JS. From forms to grid row widgets, ' +
                'they can be used in nearly any application for user interaction and directing usability.',
            children: [
                { id: 'basic-buttons', text: 'Basic Buttons', leaf: true },
                { id: 'toggle-buttons', text: 'Toggle Buttons', leaf: true },
                { id: 'menu-buttons', text: 'Menu Buttons', leaf: true },
                { id: 'menu-bottom-buttons', text: 'Menu Bottom Buttons', leaf: true },
                { id: 'split-buttons', text: 'Split Buttons', leaf: true },
                { id: 'split-bottom-buttons', text: 'Split Bottom Buttons', leaf: true },
                { id: 'left-text-buttons', text: 'Left Text Buttons', leaf: true },
                { id: 'right-text-buttons', text: 'Right Text Buttons', leaf: true },
                { id: 'link-buttons', text: 'Link Buttons', leaf: true },
                { id: 'segmented-buttons', text: 'Segmented Buttons', leaf: true },
                { id: 'vertical-segmented-buttons', text: 'Vertical Segmented Buttons', leaf: true }
            ]
        };
    }
});
