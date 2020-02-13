jQuery(document).ready(function () {
    var url ="https://staging.hialabs.com:5443/bosh";
    jQuery.xmpp.connect({url:url, jid: 'octopus@staging.hialabs.com', password: 'Urtilin343',
        onConnect: function(){
            jQuery.xmpp.setPresence(null, function(){
                console.log('NowOnline!');
                    });
jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: 'sendlogs', resource: "Chat"});
                    },
                        
        onPresence: function(presence){
            console.log(presence);
            console.log('returning!');
            },
                        
                        
        onError: function(error){
            console.log(error.error);
            },
                        
        onMessage: function(message){
            console.log(message['body']);
            jQuery('#log_st').text(message['body']);
            }
                                        
    });


});

