Ext.define('ClassSystem.Person', {
    name: 'Unknown',
    
    constructor: function(config) {
        this.initConfig(config);
    },

    eat: function(foodType) {
        alert(this.name + " is eating: " + foodType);
    }
});