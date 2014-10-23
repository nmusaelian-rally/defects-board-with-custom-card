Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    requires:['CustomCard'],
   launch: function() {
        var millisecondsInDay = 86400000;
        var startDate = new Date(new Date() - millisecondsInDay*30).toISOString(); //in the last 30 days
        this.add({
            xtype: 'rallycardboard',
            types: ['Defect'],
            attribute: 'ScheduleState',
            context: this.getContext(),
            cardConfig: {
                xtype: 'customcard',
                showIconsAndHighlightBorder: true,
                editable: false,
                fields: ['Priority', 'State']
            },
            storeConfig:{
                filters:[
                    {
                        property: 'LastUpdateDate',
                        operator: '>',
                        value: startDate
                    }
                ]
            }
        });
    }
});