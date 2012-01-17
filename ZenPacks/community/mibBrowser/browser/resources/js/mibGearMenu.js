(function() {

/**
* On the device details page the uid is
* Zenoss.env.device_uid and on most other pages it is set with
* the environmental variable PARENT_CONTEXT;
**/
    function getPageContext() {
        return Zenoss.env.device_uid || Zenoss.env.PARENT_CONTEXT;
    }

    Ext.ComponentMgr.onAvailable('mibs-configure-menu', function(config) {
        var menuButton = Ext.getCmp('mibs-configure-menu');
        menuButton.menuItems.push({
            xtype: 'menuitem',
            text: _t('Example Mib Action'),
            handler: function(){
                console.log('JC - example mib action clicked!');
            }
          },{
            xtype: 'menuitem',
            text: _t(' Another example device action'),
            handler: function() {
                var win = new Zenoss.CommandWindow({
                    uids: getPageContext(),
                    target: 'run_my_mib_predefined_command',
                    title: _t('Janes Title in mib Action menu window')
                });
                win.show();
            }
        });

    });
}());


