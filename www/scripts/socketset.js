jQuery(document).ready(function () {
                       
    var jid = 'octopus@staging.hialabs.com';
                var password = 'Urtilin343';
                //An example of bosh server url. This site is working but it can change or go down.
                //If you are going to have a production site, you must install your own BOSH server
                var url ="https://staging.hialabs.com:5443/bosh";
                jQuery.xmpp.connect({url:url, jid: jid, password: password,
                    onConnect: function(){
                        console.log('Connected!');
                        jQuery.xmpp.setPresence(null, function(){
                            console.log('NowOnline!');
                            
                        });
    jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: 'sendlog', resource: "Chat"});
                    },
                    onPresence: function(presence){
                        console.log(presence.from);
                        var preFrom = presence.from;
                        console.log('returning!');
                        jQuery('#presense').text((presence.from).split('/')[0]);
                    },
                    onDisconnect: function(){
                        jQuery('#presense').text('Disconnected!');
                    },
                    onError: function(error){
                        jQuery('#presense').text(error.error);
                        console.log(error.error);
                    },
                    onMessage: function(message){
                        var msg = JSON.parse(message.body);
                        console.log(msg)
                        if (msg['plug2state'] == '2off'){
                            jQuery('#plug2_state').prop("checked", false);
                        }
                        if (msg['plug2state'] == '2on'){
                            jQuery('#plug2_state').prop("checked", true);
                        }
                        if (msg['plug1state'] == '1off'){
                            jQuery('#plug1_state').prop("checked", false);
                        }
                        if (msg['plug1state'] == '1on'){
                            jQuery('#plug1_state').prop("checked", true);
                        }
                        jQuery('#plug1_name').text('Name: ' + msg['plug1name']);
                        jQuery('#plug2_name').text('Name: ' + msg['plug2name']);
                    }
                   
                });
                       

    jQuery('#socketsave').click(function () {
        var s1 = jQuery('#socket1').val();
        var s2 = jQuery('#socket2').val();
            if (s1.length>3 && s1.length<16 || s2.length>3 && s2.length<16) {

            jQuery('#plug1_name').text('Name: ');
            jQuery('#plug2_name').text('Name: ');
            jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: JSON.stringify({ plug1name: s1, plug2name: s2 }), resource: "Chat"});
                                location.reload();}
                                else {
                                alert('Use only 4 - 15 symbols!');
                                }
    });
                       
                       
           jQuery('#plug1_state').on('click', function() {
                 if (jQuery(this).is(':checked')) {
                    jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: '1on', resource: "Chat"});
                 }
                 else {
                    jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: '1off', resource: "Chat"});
                 }
                 });
                       
            jQuery('#plug2_state').on('click', function() {
                if (jQuery(this).is(':checked')) {
                    jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: '2on', resource: "Chat"});
                }
                else {
                    jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: '2off', resource: "Chat"});
                }
                });

});
