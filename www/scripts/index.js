
jQuery(document).ready(function () {
    var interval = setInterval(function () {
        var reqs = jQuery.ajax({
            method: 'GET',
            dataType: 'jsonp',
            async: true,
            crossDomain: true,
            url: 'http://192.168.4.1:5555/test_connection',
            statusCode: {
                404: function () {
                    jQuery('.event.listening').text("NO DATA RETURNED!");
                },
                200: function () {
                    jQuery('.event.listening').text('Setup server found');
                    window.location.replace('http://192.168.4.1:5555');
                }
            },
            data: {
            },
            contentType: 'application/json;charset=UTF-8',
            error: function () {
                jQuery('.event.listening').text("No setup server found");
                var req = jQuery.ajax({
                    method: 'GET',
                    dataType: 'jsonp',
                    async: true,
                    crossDomain: true,
                    url: 'https://staging.hialabs.com/keywrite/read_all',
                    statusCode: {
                        404: function () {
                            jQuery('.event.listening').text("NO SERVER FOUND!");
                        },
                        200: function () {
                            jQuery('.event.listening').text('staging connected!');
                            window.location.replace('myAppPage.html');
                        }
                    },
                    data: {
                    },
                    contentType: 'application/json;charset=UTF-8',
                    error: function () {
                        jQuery('.event.listening').text("No available server found");
                    },
                    timeout: 3000
                });
            },
            timeout: 3000
        });
    }, 2000);
        });
