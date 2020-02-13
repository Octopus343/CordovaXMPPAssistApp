jQuery(document).ready(function () {
    var interval = setInterval(function () {
        var reqs = jQuery.ajax({
            method: 'GET',
            dataType: 'json',
            async: true,
            crossDomain: true,
            url: 'https://staging.hialabs.com/keywrite/read_all',

            data: {
            },
            contentType: 'application/json;charset=UTF-8',
            error: function () {
            },
            success: function (response) {
                jQuery('#bluetooth').text(JSON.stringify(response.bluetooth));
                jQuery('#container').empty();
                var z = response.bluelist.split(";");
                for (var i = 0; i < z.length - 1; i++) { 
                    jQuery('#container').append("<button class='bluechose' type='button'>" + z[i] + "</button>");
                }
                 
                //    jQuery('#cont')text('<li>' + z[i] + '</li>');
                    //jQuery('#cont').append("<li>" + z + "</li >");
                }

            

        });
    }, 3000);
    jQuery('#scan').on('click', function () {
        var reqs = jQuery.ajax({
            method: 'GET',
            dataType: 'json',
            async: true,
            crossDomain: true,
            url: 'https://staging.hialabs.com/keywrite/append_to/blue/scan_now',

            data: {
            },
            contentType: 'application/json;charset=UTF-8',
            error: function () {
                
            },
            success: function (response) {
               

            }

        });
    });
    jQuery('body').on('click', ".bluechose", function () {
        //alert(jQuery(this).text())
        var str = (jQuery(this).text()).slice(1, 18);
        var reqs1 = jQuery.ajax({
            method: 'GET',
            dataType: 'json',
            async: true,
            crossDomain: true,
            url: 'https://staging.hialabs.com/keywrite/append_to/bluemac/' + str,

            data: {
            },
            contentType: 'application/json;charset=UTF-8',
            error: function () {

            },
            success: function (response) {
                
                

            }

        });
        
        var reqs2 = jQuery.ajax({
            method: 'GET',
            dataType: 'json',
            async: true,
            crossDomain: true,
            url: 'https://staging.hialabs.com/keywrite/append_to/blueconn/connect_now',

            data: {
            },
            contentType: 'application/json;charset=UTF-8',
            error: function () {

            },
            success: function (response) {

            }

        });
       
    });
});



