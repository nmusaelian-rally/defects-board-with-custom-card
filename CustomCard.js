(function () {
    var Ext = window.Ext4 || window.Ext;
    Ext.define('CustomCard', {
        extend: 'Rally.ui.cardboard.Card',
        alias: 'widget.customcard',
        
        afterRender: function() {
            this.callParent(arguments);
            var color = this._setColor();
            var colorDiv = this.getEl().down('.artifact-color');
            colorDiv.setStyle('backgroundColor', color);
        },
        
        reRender: function() {
            this.callParent(arguments);
            var color = this._setColor();
            var colorDiv = this.getEl().down('.artifact-color');
            colorDiv.setStyle('backgroundColor', color);
        },
        
        _setColor: function(){
            var color;
            var priority = this._getPriority();
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
            return color;
        },
        
        _getPriority: function(){
            var record = this.getRecord();
            return record.get('Priority');
        }
    });
})();