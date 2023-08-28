( function( $ ) {
    'use strict';
    
    /*
		Mode Switcher
	*/

    // clear all vars
    $.removeCookie('skin', { path: '/' });
    var skin = false;
    var skin_ui = false;
    var skin_dir = false;

    // add new vars
    var skin_cookie_name = 'default';

    var demo = [
        'digital',
        'developer',
        'designer',
        'system',
        'dark',
        'business',
        'marketing',
        'streamer',
        'writer',
        'crypto',
        'lawyer',
        'digital-2',
        'cyberpunk',
        'rtl'
    ];

    var location_url = window.location.href.replace( 'https://ryancv.bslthemes.com/', '' );
    var location_array = location_url.split( '/' );

    location_array.forEach(locationEach);

    function locationEach(item) {
        if ( demo.includes(item) ) {
            skin_cookie_name = item;
        }
    }

    var skin_cookie = skin_cookie_name + '_skin';

	var new_skin_dir = $('.mode-switch-btn').data( 'ui-dir' ) + '/css/';
	var new_skin_ui = $('.mode-switch-btn').data( 'ui' );
	var new_skin = $.cookie(skin_cookie);

	if ( new_skin != undefined ) {
        if ( new_skin_ui == '1' ) {
            $('#mode-switch-radio').prop("checked", true);
        }
        if ( new_skin_ui == '0' ) {
            $('#mode-switch-radio').prop("checked", false);
        }
	}

	if ( new_skin != undefined ) {
        if ( new_skin == '1' ) {
			if ( $('#ryancv-dark-css').length ){
            	$("#ryancv-dark-css").attr("href", new_skin_dir+"dark.css");
			} else {
				$('head').append('<link rel="stylesheet" id="ryancv-dark-css" type="text/css" href="'+new_skin_dir+"dark.css"+'">');
			}
			$('#mode-switch-radio').prop("checked", true);
            $('.page_wrap').addClass('theme-style-dark');
            $('body').addClass('body-style-dark');
        }
        if ( new_skin == '0' ) {
            $("#ryancv-dark-css").attr("href", "");
            $('#mode-switch-radio').prop("checked", false);
            console.log('new set false');
            $('.page_wrap').removeClass('theme-style-dark');
            $('body').removeClass('body-style-dark');
        }
	}

	if ( $('.page_wrap').hasClass('switcher-ui-disabled') ) {
		$.removeCookie(skin_cookie, { path: '/' });
	}

	$('#mode-switch-radio').on('change', function() {
		if (this.checked) {
			$.cookie(skin_cookie, '1', { expires: 7, path: '/' });
			$('.page_wrap').addClass('theme-style-dark');
			$('body').addClass('body-style-dark');
			$('#mode-switch-radio').prop("checked", true);
			if ( $('#ryancv-dark-css').length ){
				$("#ryancv-dark-css").attr("href", new_skin_dir+"dark.css");
			} else {
				$('head').append('<link rel="stylesheet" id="ryancv-dark-css" type="text/css" href="'+new_skin_dir+"dark.css"+'">');
			}
		} else {
			$.cookie(skin_cookie, '0', { expires: 7, path: '/' });
			$('.page_wrap').removeClass('theme-style-dark');
			$('body').removeClass('body-style-dark');
			$('#mode-switch-radio').prop("checked", false);
			$("#ryancv-dark-css").attr("href", "");
		}
        return false;
	});

} )( jQuery );