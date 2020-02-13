
    jQuery(document).ready(function () {
        var url ="https://staging.hialabs.com:5443/bosh";
        jQuery.xmpp.connect({url:url, jid: 'octopus@staging.hialabs.com', password: 'Urtilin343',
            onConnect: function(){
                jQuery.xmpp.setPresence(null, function(){
                    console.log('NowOnline!');
                        });
                        },
                            
            onPresence: function(presence){
                console.log(presence);
                console.log('returning!');
                jQuery('#app_id').text('AppID: ' + (presence.from).split('/')[0]);
                },
                            
            onDisconnect: function(){
                jQuery('.offline').text('Offline');
                jQuery(".offline").css('color', 'red');
                jQuery('#theImgHealth').removeClass("blink");
                jQuery("#theImgHealth").css('opacity', '0.2');
                
                },
                            
            onError: function(error){
                console.log(error.error);
                },
                            
            onMessage: function(message){
                jQuery('.wait_anim').css('display', 'none');
                console.log(message['body']);
                jQuery('#time_status').text(message['body']);
                jQuery(".offline").text('Online');
                jQuery(".offline").css('color', 'green');
                jQuery("#theImgHealth").css('opacity', '1');
                jQuery('#theImgHealth').addClass("blink");
                jQuery('#wifi_status').text((message.from).split('.')[0]);
                },
                            
            onIq: function(iq){
                console.log(iq);
                            }
                                                           
        });
        var interval = setInterval(function () {
            console.log('sending heartbeat!');
            jQuery.xmpp.sendMessage({to: 'octopus2@staging.hialabs.com', body: 'heartbeat', resource: "Chat"});
        }, 2000);
                                                               
                           
                           jQuery('#socketset').on('click', function () {
                               window.location.replace('myPlugPage.html');
                           });


    });

