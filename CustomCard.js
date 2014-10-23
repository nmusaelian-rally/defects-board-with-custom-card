(function () {
    var Ext = window.Ext4 || window.Ext;
    Ext.define('CustomCard', {
        extend: 'Rally.ui.cardboard.Card',
        alias: 'widget.customcard',
        
        afterRender: function() {
            this.callParent(arguments);
            var priority = this._getPriority();
            var color;
            var colorDiv = this.getEl().down('.artifact-color');
            switch(priority){
                case 'None':
                    color = 'gray';
                    break;
                case 'Low':
                    color = 'yellow';
                    break;
                case 'Normal':
                    color = 'gold';
                    break;
                case 'High Attention':
                    color = 'orange';
                    break;
                case 'Resolve Immediately':
                    color = 'red';
                    break;
                default:
                    color = 'brown';
            }
            colorDiv.setStyle('backgroundColor', color);
        },
        
        _getPriority: function(){
            var record = this.getRecord();
            return record.get('Priority');
        }
    });
})();